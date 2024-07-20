import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj-bLtO4xbzzUepd-cW0r2Un9F0mFDolY",
  authDomain: "firestore-test-d5176.firebaseapp.com",
  projectId: "firestore-test-d5176",
  storageBucket: "firestore-test-d5176.appspot.com",
  messagingSenderId: "38924264878",
  appId: "1:38924264878:web:689020b7fa83b1528ed43f",
  measurementId: "G-7QMZP2BZXE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
