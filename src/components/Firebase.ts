// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVYpyMkgt8SnsVRWHEZmloRMQXNTtQMBE",
    authDomain: "portfoliodb-278ef.firebaseapp.com",
    projectId: "portfoliodb-278ef",
    storageBucket: "portfoliodb-278ef.appspot.com",
    messagingSenderId: "969309443894",
    appId: "1:969309443894:web:176fe5a199260fd240c597",
    measurementId: "G-V01N5ELR9J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const db = getFirestore();
