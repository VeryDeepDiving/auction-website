import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQSA7tCc69mdUF4qohkMGmnK3jv-xt-yo",
  authDomain: "auctionatdv.firebaseapp.com",
  projectId: "auctionatdv",
  storageBucket: "auctionatdv.firebasestorage.app",
  messagingSenderId: "1002143870744",
  appId: "1:1002143870744:web:30d83323af46d7e7d4386d",
  measurementId: "G-7QH2YHN4MN"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
