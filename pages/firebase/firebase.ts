// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4fCAOms3Q_4f6ZX9PrNAtMggAKUgHHYM",
  authDomain: "task-manager-8e468.firebaseapp.com",
  projectId: "task-manager-8e468",
  storageBucket: "task-manager-8e468.appspot.com",
  messagingSenderId: "734078230273",
  appId: "1:734078230273:web:43aaa4ff5682b8cd388500",
  measurementId: "G-9P6E19LYXQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
