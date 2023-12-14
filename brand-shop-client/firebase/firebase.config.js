// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaiiz5wIRK5CDUYjqL_xTGjxUxSatGUQQ",
    authDomain: "revamp-shop.firebaseapp.com",
    projectId: "revamp-shop",
    storageBucket: "revamp-shop.appspot.com",
    messagingSenderId: "717573775046",
    appId: "1:717573775046:web:05b075933d3026395401c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth