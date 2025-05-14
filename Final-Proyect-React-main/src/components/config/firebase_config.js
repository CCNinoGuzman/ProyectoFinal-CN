// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlkgGsC9IH9EI-ocllt4e_ciM8_4ePmDQ",
  authDomain: "coder-app-react.firebaseapp.com",
  projectId: "coder-app-react",
  storageBucket: "coder-app-react.firebasestorage.app",
  messagingSenderId: "761995850562",
  appId: "1:761995850562:web:00ad22b4bb6893e8540edb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);