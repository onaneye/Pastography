// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuI6PJulY1nMSYLM5lP-XyCNmDBC1X9tI",
  authDomain: "pastography.firebaseapp.com",
  projectId: "pastography",
  storageBucket: "pastography.appspot.com",
  messagingSenderId: "2649173089",
  appId: "1:2649173089:web:7ce83bb14e11888c544e20",
  measurementId: "G-7W0BGQ1X56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export {db, storage}