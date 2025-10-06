import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCkERBBvNX3hPj52Mfhgv6DMYE-8BrYq0E",
  authDomain: "alvaradogas-4c6dd.firebaseapp.com",
  databaseURL: "https://alvaradogas-4c6dd-default-rtdb.firebaseio.com",
  projectId: "alvaradogas-4c6dd",
  storageBucket: "alvaradogas-4c6dd.firebasestorage.app",
  messagingSenderId: "47965276483",
  appId: "1:47965276483:web:63acd0620553f6f9ff07f6",
  measurementId: "G-XQJ1NRQHPD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };