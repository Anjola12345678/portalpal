// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo9S-1c-P2eVG6PLJ4UiuCTrLDjmh1MsQ",
  authDomain: "login-auth-21362.firebaseapp.com",
  projectId: "login-auth-21362",
  storageBucket: "login-auth-21362.firebasestorage.app",
  messagingSenderId: "832916291045",
  appId: "1:832916291045:web:0ddf9586af43282969830c",
  measurementId: "G-E95QG8E1LP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export default app;
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
//const analytics = getAnalytics(app);