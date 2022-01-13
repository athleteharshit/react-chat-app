import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { User } from "../../types/user";
const providerGoogle = new GoogleAuthProvider();

export const signIn = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await signInWithPopup(auth, providerGoogle);
      resolve(result.user);
    } catch (error) {
      reject(error);
    }
  });
};

export const setUser = (user: User) => {
  return new Promise(async (resolve, reject) => {
    try {
      await setDoc(doc(db, "users", user.uid), user);
      resolve("user set succesfully");
    } catch (error) {
      reject(error);
    }
  });
};
