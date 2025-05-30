import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration (replace with your own config from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyByxpnHSX4Je9rzDMF5s2yLv4e2n-AP_YE",
  authDomain: "tribe-academey.firebaseapp.com",
  projectId: "tribe-academey",
  storageBucket: "tribe-academey.firebasestorage.app",
  messagingSenderId: "103027274254",
  appId: "1:103027274254:web:aafd7995180f8641fb825f", 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };