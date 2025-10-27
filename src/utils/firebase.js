// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS3xOIE4JX4DrodOSYFt2gXRzr2HoR09M",
  authDomain: "netflixgpt-42fef.firebaseapp.com",
  projectId: "netflixgpt-42fef",
  storageBucket: "netflixgpt-42fef.firebasestorage.app",
  messagingSenderId: "1093279786039",
  appId: "1:1093279786039:web:274d3bb47b57ad3cf78bb2",
  measurementId: "G-B2DE1HFEDM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
