// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { GoogleAuthProvider } from "firebase/auth";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCkhG9meECZU2wBtBuF6F1H5G_mHCo1F7o",
//   authDomain: "saas-d25f1.firebaseapp.com",
//   projectId: "saas-d25f1",
//   storageBucket: "saas-d25f1.appspot.com",
//   messagingSenderId: "980234465529",
//   appId: "1:980234465529:web:ab2b8cbca83be1560d3228",
//   measurementId: "G-3SZLYSCX67"
// };

// // Initialize Firebase
// export const provider = new GoogleAuthProvider();
// export const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider
} from "firebase/auth";
import {  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkhG9meECZU2wBtBuF6F1H5G_mHCo1F7o",
  authDomain: "saas-d25f1.firebaseapp.com",
  projectId: "saas-d25f1",
  storageBucket: "saas-d25f1.appspot.com",
  messagingSenderId: "980234465529",
  appId: "1:980234465529:web:ab2b8cbca83be1560d3228",
  measurementId: "G-3SZLYSCX67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
// const analytics = getAnalytics(app);

