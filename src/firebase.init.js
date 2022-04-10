// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD62q-yGzvc2thuD2Vn73bRTo6TcM2-F1A",
  authDomain: "project-5d2ae.firebaseapp.com",
  projectId: "project-5d2ae",
  storageBucket: "project-5d2ae.appspot.com",
  messagingSenderId: "915164323441",
  appId: "1:915164323441:web:bc4ebb33efd41e830e05d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;