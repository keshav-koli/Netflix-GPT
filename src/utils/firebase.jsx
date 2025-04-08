// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUmZI_DUwqdIG5v6vzi8kxVRMukDkg2Ic",
  authDomain: "netflixgpt-67af3.firebaseapp.com",
  projectId: "netflixgpt-67af3",
  storageBucket: "netflixgpt-67af3.firebasestorage.app",
  messagingSenderId: "760942591151",
  appId: "1:760942591151:web:33ae7e2cf257b3329ca85a",
  measurementId: "G-8RRQJ7G2CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);