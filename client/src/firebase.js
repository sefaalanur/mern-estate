// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-538f7.firebaseapp.com",
  projectId: "mern-estate-538f7",
  storageBucket: "mern-estate-538f7.appspot.com",
  messagingSenderId: "256853734685",
  appId: "1:256853734685:web:5722e7636693e959b31df4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);