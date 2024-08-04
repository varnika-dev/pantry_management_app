// components/Firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg0NBWd8_hHRyONKTHy8eEouwiUITw0gI",
  authDomain: "pantry-management-app-1fc7e.firebaseapp.com",
  projectId: "pantry-management-app-1fc7e",
  storageBucket: "pantry-management-app-1fc7e.appspot.com",
  messagingSenderId: "916986023101",
  appId: "1:916986023101:web:38acc5a25f3a881606bbd4",
  measurementId: "G-VJRREJ6WHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
