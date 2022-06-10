// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHnOJhMYerevtLElQQwRcx3HB1nu3Mr4Q",
  authDomain: "shafiul-s-portfolio.firebaseapp.com",
  projectId: "shafiul-s-portfolio",
  storageBucket: "shafiul-s-portfolio.appspot.com",
  messagingSenderId: "666099764444",
  appId: "1:666099764444:web:39b47557830ede251d7819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;