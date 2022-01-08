import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";

function SendMsg() {
  const sendMessage = async () => {
    if (auth.currentUser) {
      const { uid, photoURL } = auth.currentUser;
      try {
        const docRef = await addDoc(collection(db, "users"), {
          text: "harshit",
          photoURL,
          uid,
          createdAt: "",
        });
        console.log("Document written with ID: ", docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };
  return (
    <div>
      <button onClick={sendMessage}>send message</button>
    </div>
  );
}

export default SendMsg;
