import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzRcwTkm_oRuQv0olRAGB7q_KYTsoKoGc",
  authDomain: "react-chat-app-3d482.firebaseapp.com",
  projectId: "react-chat-app-3d482",
  storageBucket: "react-chat-app-3d482.appspot.com",
  messagingSenderId: "916158687866",
  appId: "1:916158687866:web:106b700e9e0daaf7a569c3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };
