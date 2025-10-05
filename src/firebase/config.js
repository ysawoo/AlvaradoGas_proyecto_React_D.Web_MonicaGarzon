// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };