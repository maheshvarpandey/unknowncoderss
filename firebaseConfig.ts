// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4sAOqOv71ENQalAUX48rulyMRjYANR4M",
  authDomain: "unknowncoderss.firebaseapp.com",
  projectId: "unknowncoderss",
  storageBucket: "unknowncoderss.appspot.com",
  messagingSenderId: "916608616239",
  appId: "1:916608616239:web:d8c75174543ab86d4043da",
  measurementId: "G-73Y32YXZP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);