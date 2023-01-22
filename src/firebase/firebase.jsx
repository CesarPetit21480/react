// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5dlxTfEiD_mgPFlW2tLca4U3EY4OAxmY",
  authDomain: "ecommerse-pocho.firebaseapp.com",
  projectId: "ecommerse-pocho",
  storageBucket: "ecommerse-pocho.appspot.com",
  messagingSenderId: "155884666376",
  appId: "1:155884666376:web:f3e404a7bb9f59bf221bbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);