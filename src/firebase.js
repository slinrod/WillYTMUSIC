// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAzMJCTJY5rH090QTKmL3A56pLOSm38RwM",
  authDomain: "proyectofinalxd-d98ef.firebaseapp.com",
  projectId: "proyectofinalxd-d98ef",
  storageBucket: "proyectofinalxd-d98ef.firebasestorage.app",
  messagingSenderId: "1093691744006",
  appId: "1:1093691744006:web:07a79d6ca6559ab7720887",
  measurementId: "G-2907KQ3YF7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();