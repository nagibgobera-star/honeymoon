// =============================================================
//  seed.js — Poblar Firestore con los datos iniciales del viaje
//
//  Importado por admin.html para el botón "Cargar datos iniciales".
//  Usa setDoc con IDs predefinidos para mantener consistencia.
//  Sobrescribe documentos existentes si ya existen.
// =============================================================

import { TRIP_DATA } from './data.js';
import {
  collection, doc, setDoc, getDocs, deleteDoc
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

/**
 * Escribe todos los datos de TRIP_DATA en la colección 'activities'.
 * Usa los IDs predefinidos (d1-vuelo, d1-hotel, etc.)
 * Todos los setDoc se despachan en paralelo con Promise.all.
 * @param {Firestore} db — instancia de Firestore
 * @param {function(number, number)} onProgress — callback(done, total)
 * @returns {Promise<number>} — número de documentos escritos
 */
export async function seedDatabase(db, onProgress) {
  const activitiesRef = collection(db, 'activities');
  const total = TRIP_DATA.length;
  let done = 0;

  await Promise.all(
    TRIP_DATA.map(act =>
      setDoc(doc(activitiesRef, act.id), { ...act }).then(() => {
        done++;
        if (onProgress) onProgress(done, total);
      })
    )
  );

  console.log(`Seeded ${total} activities to Firestore`);
  return total;
}

/**
 * Elimina TODOS los documentos de la colección 'activities'.
 * @param {Firestore} db
 * @returns {Promise<number>} — número de documentos eliminados
 */
export async function clearActivities(db) {
  const snap = await getDocs(collection(db, 'activities'));
  await Promise.all(snap.docs.map(d => deleteDoc(doc(db, 'activities', d.id))));
  return snap.size;
}

/**
 * Comprueba si la colección 'activities' está vacía.
 * @param {Firestore} db
 * @returns {Promise<boolean>}
 */
export async function isActivitiesEmpty(db) {
  const snap = await getDocs(collection(db, 'activities'));
  return snap.empty;
}
