// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDHuttOALqXyM5185d9w9n3oLD23rtAr28",
  authDomain: "my-market-7f10c.firebaseapp.com",
  projectId: "my-market-7f10c",
  storageBucket: "my-market-7f10c.appspot.com",
  messagingSenderId: "850467694613",
  appId: "1:850467694613:web:bfba0915ace0a3431a461c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
