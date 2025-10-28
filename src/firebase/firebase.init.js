// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FBASE_apiKey,
  authDomain: import.meta.env.VITE_FBASE_authDomain,
  projectId: import.meta.env.VITE_FBASE_projectId,
  storageBucket: import.meta.env.VITE_FBASE_storageBucket,
  messagingSenderId: import.meta.env.VITE_FBASE_messagingSenderId,
  appId: import.meta.env.VITE_FBASE_appId,
};

// Initialize Firebase
const fbaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const fbaseAuth = getAuth(fbaseApp);

export default fbaseAuth;
