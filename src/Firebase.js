// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyBbsTWkeOFlCGT2-s4tkcQijN-WQ5Hy96M",
  authDomain: "clone-7a529.firebaseapp.com",
  projectId: "clone-7a529",
  storageBucket: "clone-7a529.firebasestorage.app",
  messagingSenderId: "583457744",
  appId: "1:583457744:web:5253bfe2df5bc5b04137d5",
  measurementId: "G-ZXC0VVMZNG"
}
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
export {auth};