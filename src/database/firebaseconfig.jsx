import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  
import { getAuth } from "firebase/auth";

// Configuración de firebase usando variables de entorno
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API__KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Inicializa Firebase
const appfirebase = initializeApp(firebaseConfig);

//Inicializa Firestore
const db = getFirestore(appfirebase);

//Inicializa Authentication
const auth = getAuth(appfirebase);

export { appfirebase, db, auth };