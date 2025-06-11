import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js';
import { getDatabase, ref, set, push, child, get } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

/**
 * Guarda un voto en la base de datos en tiempo real.
 * @param {string} productID - ID del producto que recibe el voto.
 * @returns {Promise<{message: string}>} - Resultado de la operación.
 */
function saveVote(productID) {
  const votesRef = ref(database, 'votes');       // Referencia a la colección 'votes'
  const newVoteRef = push(votesRef);             // Nueva referencia para el voto (ID generado automáticamente)

  return set(newVoteRef, {
    productID,
    date: new Date().toISOString()
  })
  .then(() => {
    return { message: "Voto guardado exitosamente." };
  })
  .catch((error) => {
    return { message: `Error al guardar el voto: ${error.message}` };
  });
}

function getVotes() {
  const dbRef = ref(database);

  return get(child(dbRef, 'votes'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.warn("No hay votos registrados.");
        return null;
      }
    })
    .catch((error) => {
      console.error("Error al obtener votos:", error);
      return null;
    });
}

export { saveVote, getVotes };