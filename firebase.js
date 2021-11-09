// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth' // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUIbXWC7EFZTqEsj67SNaZZClSu_8Vh6A",
    authDomain: "uber-clone-with-nextjs.firebaseapp.com",
    projectId: "uber-clone-with-nextjs",
    storageBucket: "uber-clone-with-nextjs.appspot.com",
    messagingSenderId: "81629273740",
    appId: "1:81629273740:web:0963dcdb5acb8f053125a9",
    measurementId: "G-FJ44X6QJBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }