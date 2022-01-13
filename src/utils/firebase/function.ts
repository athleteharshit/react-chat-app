import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";
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

export const logOut = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await signOut(auth);
      resolve("logout succesfully");
    } catch (error) {
      reject(error);
    }
  });
};

export const updateUser = (uid: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const docRef = doc(db, "users", uid);
      await updateDoc(docRef, {
        isOnline: false,
      });
      resolve("logout succesfully");
    } catch (error) {
      reject(error);
    }
  });
};
