import { onCall, HttpsError } from "firebase-functions/v2/https";
import { onDocumentWritten } from "firebase-functions/v2/firestore";
import { defineSecret } from "firebase-functions/params";
import { setGlobalOptions } from "firebase-functions";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import apn from "@parse/node-apn";

initializeApp();
setGlobalOptions({ maxInstances: 10 });

const apnsKey = defineSecret("APNS_PRIVATE_KEY");

const APNS_KEY_ID  = "G4GY77QX25";
const APNS_TEAM_ID = "8X44B5MQDF";
const APNS_BUNDLE  = "online.optitank.app";

async function sendAPNS(
  deviceToken: string,
  title: string,
  body: string,
  payload?: Record<string, string>
): Promise<void> {
  const provider = new apn.Provider({
    token: { key: apnsKey.value(), keyId: APNS_KEY_ID, teamId: APNS_TEAM_ID },
    production: true,
  });
  const notif = new apn.Notification();
  notif.alert = { title, body };
  notif.topic = APNS_BUNDLE;
  notif.sound = "default";
  if (payload) notif.payload = payload;

  const result = await provider.send(notif, deviceToken);
  provider.shutdown();

  if (result.failed.length > 0) {
    throw new Error(result.failed[0].response?.reason ?? "APNs send failed");
  }
}

// Callable depuis la web app — envoie une notif test à l'utilisateur connecté
export const sendPush = onCall(
  { secrets: [apnsKey] },
  async (req) => {
    if (!req.auth) throw new HttpsError("unauthenticated", "Non authentifié");

    const { token, title, body, data } = req.data as {
      token: string;
      title: string;
      body: string;
      data?: Record<string, string>;
    };

    if (!token || !title || !body)
      throw new HttpsError("invalid-argument", "token, title et body requis");

    await sendAPNS(token, title, body, data);
    return { success: true };
  }
);

// Déclenché automatiquement quand les prix changent — alerte si prix en baisse
export const priceAlertTrigger = onDocumentWritten(
  { document: "price_history/{date}", secrets: [apnsKey] },
  async (event) => {
    const after = event.data?.after?.data() as
      | Record<string, Record<string, string>>
      | undefined;
    if (!after) return;

    const db = getFirestore();
    const usersSnap = await db.collection("users").get();
    const sends: Promise<void>[] = [];

    for (const userDoc of usersSnap.docs) {
      const profile = userDoc.data() as {
        apnsToken?: string;
        favorites?: string[];
        fuelType?: string;
        priceAlerts?: boolean;
      };

      if (!profile.apnsToken || !profile.priceAlerts) continue;

      const fuel = profile.fuelType ?? "SP95";
      const favorites = profile.favorites ?? [];

      for (const stationId of favorites) {
        const prices = after[stationId];
        if (!prices?.[fuel]) continue;
        const newPrice = prices[fuel];

        const stateRef = db
          .collection("users")
          .doc(userDoc.id)
          .collection("alert_state")
          .doc(stationId);

        const prevSnap = await stateRef.get();
        const prevPrice = prevSnap.data()?.[fuel] as string | undefined;

        if (!prevPrice || parseFloat(newPrice) < parseFloat(prevPrice) - 0.01) {
          sends.push(
            sendAPNS(
              profile.apnsToken,
              "Prix en baisse !",
              `${fuel} à CHF ${newPrice} dans ta station favorite`,
              { stationId, fuel, price: newPrice }
            )
          );
          await stateRef.set({ [fuel]: newPrice }, { merge: true });
        }
      }
    }

    await Promise.allSettled(sends);
  }
);
