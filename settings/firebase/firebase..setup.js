// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa62w0tcFD3St-b2MSeB4YmewyjEysy34",
  authDomain: "realfast.firebaseapp.com",
  projectId: "realfast",
  storageBucket: "realfast.appspot.com",
  messagingSenderId: "898402787619",
  appId: "1:898402787619:web:e2e9e47b35b2440b442c96",
  measurementId: "G-8RVX89FE9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export {auth}