// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: process.env["API_KEY"],
  // authDomain: process.env["AUTH_DOMAIN"],
  // projectId: process.env["PROJECT_ID"],
  // storageBucket: process.env["STORAGE_BUCKET"],
  // messagingSenderId: process.env["MESSAGING_SENDER_ID"],
  // appId: process.env["APP_ID"],
  // measurementId: process.env["MEASUREMENT_ID"],

  apiKey: "AIzaSyCknhU0uX8F15byI65bEFfatoxgxVJ1ZU4",
  authDomain: "my-recipe-app-69318.firebaseapp.com",
  projectId: "my-recipe-app-69318",
  storageBucket: "my-recipe-app-69318.appspot.com",
  messagingSenderId: "398102193115",
  appId: "1:398102193115:web:04ac9038ba07a0c4f4bdfe",
  measurementId: "G-964EW4EF80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
