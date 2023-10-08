// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv0N1U7Renx8fONfod04o_vPASyfQNRJ0",
  authDomain: "yoga-center-cb96f.firebaseapp.com",
  projectId: "yoga-center-cb96f",
  storageBucket: "yoga-center-cb96f.appspot.com",
  messagingSenderId: "593991535674",
  appId: "1:593991535674:web:05cf3f431ab10f0e20f903"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;