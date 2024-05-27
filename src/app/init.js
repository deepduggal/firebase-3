// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgPC4EH8Wp2TZ1TckAWElBDXTPfjHkEss",
  authDomain: "website-biz-e3441.firebaseapp.com",
  projectId: "website-biz-e3441",
  storageBucket: "website-biz-e3441.appspot.com",
  messagingSenderId: "8169269472",
  appId: "1:8169269472:web:24d8aa4064c1f72c50c885",
  measurementId: "G-4S9G4TGFZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);