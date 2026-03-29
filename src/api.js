/**
 * api.js - Connexion à l'API Firestore du TCS (benzin.tcs.ch)
 * Structure réelle des documents identifiée par debug:
 * - displayName, formattedAddress, brand, location{lat,lng}, fuelCollection{SP95{displayPrice}...}
 * - Project ID: tcs-benzin
 */

const API_KEY = 'AIzaSyCQ8f6sXb1gYIiv5rlHKeZ2EVMzC-anzIU';
const FIRESTORE_URL = '/api/tcs/v1/projects/gas-prices-prod/databases/(default)/documents:runQuery';

/**
 * Récupère TOUTES les stations non-supprimées depuis Firestore
 */
export async function fetchTCSStations() {
  try {
    const response = await fetch(FIRESTORE_URL + '?key=' + API_KEY, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        structuredQuery: {
          from: [{ collectionId: 'stations' }],
          where: {
            fieldFilter: {
              field: { fieldPath: 'isDeleted' },
              op: 'EQUAL',
              value: { booleanValue: false }
            }
          }
        }
      })
    });

    if (!response.ok) throw new Error('Erreur réseau: ' + response.status);

    const data = await response.json();
    return parseFirestoreData(data);
  } catch (error) {
    console.error('Erreur API TCS:', error);
    return [];
  }
}

function extractValue(field) {
  if (!field) return null;
  if (field.stringValue !== undefined) return field.stringValue;
  if (field.doubleValue !== undefined) return field.doubleValue;
  if (field.integerValue !== undefined) return Number(field.integerValue);
  if (field.booleanValue !== undefined) return field.booleanValue;
  if (field.timestampValue !== undefined) return field.timestampValue;
  return null;
}

function parseFirestoreData(results) {
  if (!results || !Array.isArray(results)) return [];

  const stations = [];
  // Mapping des noms de carburants dans Firestore -> noms d'affichage
  const FUEL_KEYS = ['SP95', 'SP98', 'DIESEL', 'DIESEL_PREMIUM', 'GPL', 'ADBLUE', 'GNC', 'ETHANOL_85', 'HVO100', 'H2'];
  const FUEL_DISPLAY = {
    'SP95': 'SP95', 'SP98': 'SP98', 'DIESEL': 'Diesel', 'DIESEL_PREMIUM': 'Diesel Premium',
    'GPL': 'GPL', 'ADBLUE': 'AdBlue', 'GNC': 'GNC', 'ETHANOL_85': 'Ethanol 85', 'HVO100': 'HVO100', 'H2': 'H2'
  };

  results.forEach(item => {
    const doc = item.document;
    if (!doc || !doc.fields) return;

    const f = doc.fields;

    // Nom & adresse (vrais champs Firestore)
    const stationName = extractValue(f.displayName) || extractValue(f.brand) || 'Station';
    const address = extractValue(f.formattedAddress) || '';
    const brand = extractValue(f.brand) || '';

    // Location: mapValue { fields: { lat: {doubleValue}, lng: {doubleValue} } }
    let lat = 0, lng = 0;
    if (f.location && f.location.mapValue && f.location.mapValue.fields) {
      lat = extractValue(f.location.mapValue.fields.lat) || 0;
      lng = extractValue(f.location.mapValue.fields.lng) || 0;
    }
    // Fallback: geoPointValue
    if (lat === 0 && f.location && f.location.geoPointValue) {
      lat = f.location.geoPointValue.latitude || 0;
      lng = f.location.geoPointValue.longitude || 0;
    }
    if (lat === 0 && lng === 0) return;

    // Prix: fuelCollection -> {SP95 -> mapValue -> fields -> displayPrice}
    const prices = {};
    const fuelField = f.fuelCollection || f.prices;
    if (fuelField && fuelField.mapValue && fuelField.mapValue.fields) {
      const fuelMap = fuelField.mapValue.fields;
      
      Object.keys(fuelMap).forEach(rawKey => {
        const fuelEntry = fuelMap[rawKey];
        if (!fuelEntry || !fuelEntry.mapValue || !fuelEntry.mapValue.fields) return;

        const fuelData = fuelEntry.mapValue.fields;
        
        // Vérifier si ce carburant est supprimé
        const isDeleted = extractValue(fuelData.isDeleted);
        if (isDeleted === true) return;

        const price = extractValue(fuelData.displayPrice);
        if (price !== null && price > 0) {
          const displayKey = FUEL_DISPLAY[rawKey] || rawKey;
          prices[displayKey] = price.toFixed(3);
        }
      });
    }

    if (Object.keys(prices).length === 0) return;

    const defaultPrice = prices['SP95'] || prices['Diesel'] || Object.values(prices)[0];

    stations.push({
      id: doc.name.split('/').pop(),
      name: stationName,
      brand: brand,
      address: address,
      lat: lat,
      lng: lng,
      prices: prices,
      defaultDisplayPrice: 'CHF ' + defaultPrice,
      availableFuels: Object.keys(prices)
    });
  });

  console.log('TCS: ' + stations.length + ' stations chargées avec succès');
  return stations;
}
