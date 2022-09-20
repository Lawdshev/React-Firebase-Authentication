// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEMlNxs099C_3Tfu19HBbnu6OBmLe27Yo",
  authDomain: "fir-app-dev-2900d.firebaseapp.com",
  projectId: "fir-app-dev-2900d",
  storageBucket: "fir-app-dev-2900d.appspot.com",
  messagingSenderId: "1007306785590",
  appId: "1:1007306785590:web:6e8b4923d0b45817cb2997",
  measurementId: "G-WEX9X8T47Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;


