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

export const updateUser = (uid: string | undefined) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (uid) {
        const docRef = doc(db, "users", uid);
        await updateDoc(docRef, {
          isOnline: false,
        });
        resolve("logout succesfully");
      }
    } catch (error) {
      reject(error);
    }
  });
};

// export const userList = (uid: string | undefined) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       if (uid) {
//         const q = query(collection(db, "users"));
//         onSnapshot(q, (querySnapshot) => {
//           let users: any[] = [];
//           querySnapshot.forEach((doc) => {
//             if (doc.data().uid !== uid) users.push(doc.data());
//           });
//           console.log(users, "snapshot");
//           resolve([...users]);
//         });
//       }
//     } catch (error) {
//       reject(error);
//     }
//   });
// };
