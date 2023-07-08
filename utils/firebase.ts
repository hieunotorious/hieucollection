// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlmvx9E5-MiHflkKkhYrr3zmiqIPylUcY",
  authDomain: "hieucollection.firebaseapp.com",
  projectId: "hieucollection",
  storageBucket: "hieucollection.appspot.com",
  messagingSenderId: "1086246186059",
  appId: "1:1086246186059:web:eb222285a5f98610d2b1ce",
  measurementId: "G-MPXKWCDQL1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
  prompt: "select_account",
  display: "popup",
});

const FaceBookProvider = new FacebookAuthProvider();
FaceBookProvider.setCustomParameters({
  display: "popup",
});

export const signInWithGoogle = () => {
  return signInWithPopup(auth, GoogleProvider);
};

export const signInWithFacebook = () => {
  return signInWithPopup(auth, FaceBookProvider);
};
