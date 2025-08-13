// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBHgMDHxvsdXhHSiBGTPNp4PZ6bOIPZLrY",
  authDomain: "clinic-management-system-20392.firebaseapp.com",
  projectId: "clinic-management-system-20392",
  storageBucket: "clinic-management-system-20392.appspot.com",
  messagingSenderId: "973761551856",
  appId: "1:973761551856:web:f7e24ccece0deb5c201135",
  measurementId: "G-XS9J079WX0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
