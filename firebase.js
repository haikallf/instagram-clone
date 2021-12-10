// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6ZtD0aQ-PNbmh7AsA3271TZvWKia5cKI",
  authDomain: "instagram-clone-d4a17.firebaseapp.com",
  projectId: "instagram-clone-d4a17",
  storageBucket: "instagram-clone-d4a17.appspot.com",
  messagingSenderId: "762763801239",
  appId: "1:762763801239:web:b8ed17e5cc0f33e3526fd2",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
