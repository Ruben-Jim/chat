// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyC1L4P1ki9j_NnXhcs_qA6jL31y_x7w5Iw",
    authDomain: "superchat-ae1e0.firebaseapp.com",
    projectId: "superchat-ae1e0",
    storageBucket: "superchat-ae1e0.appspot.com",
    messagingSenderId: "123810491404",
    appId: "1:123810491404:web:35cf7ae387a7210e8dd229"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
