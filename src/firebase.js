import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwxPywqzoRzCJvGX3wP1W-G16_pof6oNw",
    authDomain: "alvivrooms.firebaseapp.com",
    projectId: "alvivrooms",
    storageBucket: "alvivrooms.firebasestorage.app",
    messagingSenderId: "196214143786",
    appId: "1:196214143786:web:81da9d354fe1a72bbbfc53"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
