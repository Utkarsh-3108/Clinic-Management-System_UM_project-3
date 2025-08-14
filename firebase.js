// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBS3ACmy5c-Pa2_kWSNnfDF_BRZo8qqcyw",
  authDomain: "clinic-management-system-27203.firebaseapp.com",
  projectId: "clinic-management-system-27203",
  storageBucket: "clinic-management-system-27203.appspot.com",
  messagingSenderId: "444012084756",
  appId: "1:444012084756:web:cf52cbc791481df1c07101",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
