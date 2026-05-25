import { initializeApp } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';
import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { setGlobalOptions } from 'firebase-functions';

initializeApp();
setGlobalOptions({ maxInstances: 10 });

export const sendTestPush = onCall(async (request) => {
  const { token, title, body, url } = request.data as {
    token: string;
    title: string;
    body?: string;
    url?: string;
  };

  if (!token) throw new HttpsError('invalid-argument', 'token requis');
  if (!title)  throw new HttpsError('invalid-argument', 'title requis');

  const message = {
    token,
    notification: { title, body: body ?? '' },
    webpush: {
      notification: {
        title,
        body: body ?? '',
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        requireInteraction: false,
      },
      fcmOptions: url ? { link: url } : undefined,
    },
    apns: {
      payload: {
        aps: { badge: 1, sound: 'default' as const },
        url: url ?? 'https://optitank.online',
      },
    },
  };

  const messageId = await getMessaging().send(message);
  return { success: true, messageId };
});
