// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB0QQxBOZ4vJdoj_Luui_IVHGCAqakP98",
  authDomain: "resum-38277.firebaseapp.com",
  projectId: "resum-38277",
  storageBucket: "resum-38277.appspot.com",
  messagingSenderId: "991110422012",
  appId: "1:991110422012:web:e60da3615ef17836b22679",
  measurementId: "G-L5QSY7D7QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);