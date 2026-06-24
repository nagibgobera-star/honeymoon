// =============================================================
//  seed.js — Poblar Firestore con los datos iniciales del viaje
//
//  Importado por admin.html para los botones de carga inicial.
//  Usa setDoc con IDs predefinidos para mantener consistencia.
//  Sobrescribe documentos existentes si ya existen.
//
//  Colecciones: trips, activities, flights, accommodations, tours, dayNotes,
//               japanItems
// =============================================================

import {
  TRIPS_DATA, TRIP_DATA, FLIGHTS_DATA, ACCOMMODATIONS_DATA, TOURS_DATA, DAY_NOTES_DATA,
  BODA_TRIP_DATA, BODA_FLIGHTS_DATA, BODA_ACCOMMODATIONS_DATA, BODA_DAY_NOTES_DATA,
  JAPAN_ITEMS_DATA
} from './data.js';
import {
  collection, doc, setDoc, getDoc, getDocs, deleteDoc
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Each Firestore collection holds documents from every trip (distinguished
// by tripId) — so the seed set per collection is the union of all trips'
// arrays for that collection, not one trip's array alone.
export const SEED_SETS = {
  trips: TRIPS_DATA,
  activities: [...TRIP_DATA, ...BODA_TRIP_DATA],
  flights: [...FLIGHTS_DATA, ...BODA_FLIGHTS_DATA],
  accommodations: [...ACCOMMODATIONS_DATA, ...BODA_ACCOMMODATIONS_DATA],
  tours: TOURS_DATA,
  dayNotes: [...DAY_NOTES_DATA, ...BODA_DAY_NOTES_DATA],
  japanItems: JAPAN_ITEMS_DATA
};

// Fields that are runtime/admin-managed state, not seed "content" — an
// update-content pass must never overwrite these even if the seed object
// carries its own default value for them.
const RUNTIME_FIELDS = ['pdfUrl', 'done'];

/**
 * Escribe todos los documentos de un set en su colección de Firestore.
 * Usa los IDs predefinidos. Todos los setDoc se despachan en paralelo.
 * @param {Firestore} db
 * @param {string} collectionName — 'activities' | 'flights' | 'accommodations' | 'tours'
 * @param {function(number, number)} onProgress — callback(done, total)
 * @returns {Promise<number>} — número de documentos escritos
 */
export async function seedCollection(db, collectionName, onProgress) {
  const items = SEED_SETS[collectionName];
  if (!items) throw new Error(`Colección desconocida: ${collectionName}`);

  const ref = collection(db, collectionName);
  const total = items.length;
  let done = 0;

  await Promise.all(
    items.map(item =>
      setDoc(doc(ref, item.id), { ...item }).then(() => {
        done++;
        if (onProgress) onProgress(done, total);
      })
    )
  );

  console.log(`Seeded ${total} documents into '${collectionName}'`);
  return total;
}

/**
 * Elimina TODOS los documentos de una colección de Firestore.
 * @param {Firestore} db
 * @param {string} collectionName
 * @returns {Promise<number>} — número de documentos eliminados
 */
export async function clearCollection(db, collectionName) {
  const snap = await getDocs(collection(db, collectionName));
  await Promise.all(snap.docs.map(d => deleteDoc(doc(db, collectionName, d.id))));
  return snap.size;
}

/**
 * Comprueba si una colección está vacía.
 * @param {Firestore} db
 * @param {string} collectionName
 * @returns {Promise<boolean>}
 */
export async function isCollectionEmpty(db, collectionName) {
  const snap = await getDocs(collection(db, collectionName));
  return snap.empty;
}

/**
 * Siembra las 4 colecciones (activities, flights, accommodations, tours).
 * @param {Firestore} db
 * @param {function(string, number, number)} onProgress — callback(collectionName, done, total)
 * @returns {Promise<Object>} — { [collectionName]: count }
 */
export async function seedAll(db, onProgress) {
  const results = {};
  for (const collectionName of Object.keys(SEED_SETS)) {
    results[collectionName] = await seedCollection(
      db, collectionName,
      (done, total) => onProgress && onProgress(collectionName, done, total)
    );
  }
  return results;
}

/**
 * Actualiza el CONTENIDO de todas las colecciones desde data.js, sin tocar
 * nunca pdfUrl ni done EN DOCUMENTOS QUE YA EXISTEN — a diferencia de
 * seedAll/seedCollection (que sobrescriben el documento completo), esto usa
 * merge:true y excluye los campos gestionados en runtime. Para documentos
 * nuevos (que no existían) se escriben tal cual, con sus valores por
 * defecto de data.js, porque no hay nada que preservar. Seguro de correr
 * después de subir PDFs reales o marcar actividades como hechas.
 * @param {Firestore} db
 * @param {function(string, number, number)} onProgress — callback(collectionName, done, total)
 * @returns {Promise<Object>} — { [collectionName]: count }
 */
export async function updateContent(db, onProgress) {
  const results = {};
  for (const [collectionName, items] of Object.entries(SEED_SETS)) {
    const ref = collection(db, collectionName);
    let done = 0;
    await Promise.all(items.map(async item => {
      const docRef = doc(ref, item.id);
      const existing = await getDoc(docRef);
      const content = { ...item };
      if (existing.exists()) {
        RUNTIME_FIELDS.forEach(f => delete content[f]);
      }
      await setDoc(docRef, content, { merge: true });
      done++;
      if (onProgress) onProgress(collectionName, done, items.length);
    }));
    results[collectionName] = done;
    console.log(`Updated content for ${done} documents in '${collectionName}' (pdfUrl/done preserved on existing docs)`);
  }
  return results;
}

/**
 * Limpia las 4 colecciones (activities, flights, accommodations, tours).
 * @param {Firestore} db
 * @returns {Promise<Object>} — { [collectionName]: deletedCount }
 */
export async function clearAll(db) {
  const results = {};
  for (const collectionName of Object.keys(SEED_SETS)) {
    results[collectionName] = await clearCollection(db, collectionName);
  }
  return results;
}

/**
 * Comprueba si TODAS las colecciones están vacías (para mostrar el botón de seed).
 * @param {Firestore} db
 * @returns {Promise<boolean>}
 */
export async function isAllEmpty(db) {
  for (const collectionName of Object.keys(SEED_SETS)) {
    if (!(await isCollectionEmpty(db, collectionName))) return false;
  }
  return true;
}

// ── Backward-compatible aliases (activities only) ────────────
export const seedDatabase   = (db, onProgress) => seedCollection(db, 'activities', onProgress);
export const clearActivities = (db) => clearCollection(db, 'activities');
export const isActivitiesEmpty = (db) => isCollectionEmpty(db, 'activities');
