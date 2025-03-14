import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA4_AZ8bwebt1N3HYmIzcUPwYnORhXGf8M",
  authDomain: "edunova-2025.firebaseapp.com",
  projectId: "edunova-2025",
  storageBucket: "edunova-2025.firebasestorage.app",
  messagingSenderId: "822111888888",
  appId: "1:822111888888:web:72e01a500da25979d5620d",
  measurementId: "G-350W0H4KN8"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);

//Inicializa Firestore
const db = getFirestore(appfirebase);

//Inicializa autenticación 
const auth = getAuth(appfirebase);

export { appfirebase, db, auth };