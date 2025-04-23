// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGjyx_WmDnGLFSy1986y2Yn8GcLiIiK-A",
  authDomain: "netflix-gpt-d0467.firebaseapp.com",
  projectId: "netflix-gpt-d0467",
  storageBucket: "netflix-gpt-d0467.firebasestorage.app",
  messagingSenderId: "888787723293",
  appId: "1:888787723293:web:9b5fc790c6d47a6288d2f4",
  measurementId: "G-EMDPM8D11F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
