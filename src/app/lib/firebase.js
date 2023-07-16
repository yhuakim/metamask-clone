// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDj-Dc3YMPjjmr3iOJYObUJxQ-_pwO0sE4",
    authDomain: "metemask-clone.firebaseapp.com",
    projectId: "metemask-clone",
    storageBucket: "metemask-clone.appspot.com",
    messagingSenderId: "310794231377",
    appId: "1:310794231377:web:689eff82e0549e1c93e270",
    measurementId: "G-1FD18YR47G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);