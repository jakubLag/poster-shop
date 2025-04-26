// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-P9Tnxye1bIa8dXD5qkX9D4bxH3oHQsg",
  authDomain: "poster-shop-3a88f.firebaseapp.com",
  databaseURL: "https://poster-shop-3a88f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "poster-shop-3a88f",
  storageBucket: "poster-shop-3a88f.firebasestorage.app",
  messagingSenderId: "1070382606276",
  appId: "1:1070382606276:web:fde1bc592e32e655312691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)