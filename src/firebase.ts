import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWUlFy7_sXqMLMjFszQr1zJIc_pwuFiiU",
  authDomain: "chat-app-9f029.firebaseapp.com",
  projectId: "chat-app-9f029",
  storageBucket: "chat-app-9f029.appspot.com",
  messagingSenderId: "1014190532790",
  appId: "1:1014190532790:web:9f125f42d3ac91b0f21e17",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
