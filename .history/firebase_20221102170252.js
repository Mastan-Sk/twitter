// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-3-abb79.firebaseapp.com",
  projectId: "twitter-3-abb79",
  storageBucket: "twitter-3-abb79.appspot.com",
  messagingSenderId: "1055057989927",
  appId: "1:1055057989927:web:8532bd7157516ce4395902"
};

// Initialize Firebase

const app = getApps().length ? initializeApp(firebaseConfig)  : getApp() ;
const db = getFirestore();
const storage = getStorage();

export {db,app,storage};

