import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider,getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBr-o9uRs7WdXvXnf9CGseEA4zX8RGz3i0",
    authDomain: "journal-app-e0bae.firebaseapp.com",
    projectId: "journal-app-e0bae",
    storageBucket: "journal-app-e0bae.appspot.com",
    messagingSenderId: "327503991981",
    appId: "1:327503991981:web:f94a71207ab1b2f50b2224"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export const auth = getAuth();

export {
    db, googleAuthProvider
}