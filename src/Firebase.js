// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA48dSz010v7gCDgnpj1XjpcZO6VX0iTX0",
  authDomain: "netflix-clone-reactjs-721b2.firebaseapp.com",
  projectId: "netflix-clone-reactjs-721b2",
  storageBucket: "netflix-clone-reactjs-721b2.appspot.com",
  messagingSenderId: "312876797305",
  appId: "1:312876797305:web:b2ac25be2ec4a33cfdb3a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);