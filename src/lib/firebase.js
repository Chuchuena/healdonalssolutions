// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "healthdonatls.firebaseapp.com",
  projectId: "healthdonatls",
  storageBucket: "healthdonatls.appspot.com",
  messagingSenderId: "971325488418",
  appId: "1:971325488418:web:ba5d4621a9f17cb586797b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
