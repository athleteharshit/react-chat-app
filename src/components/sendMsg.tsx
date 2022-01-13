import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase";

function SendMsg() {
  // const sendMessage = async () => {
  //   if (auth.currentUser) {
  //     const { uid, photoURL } = auth.currentUser;
  //     try {
  //       const docRef = await addDoc(collection(db, "users"), {
  //         text: "third message",
  //         photoURL,
  //         uid,
  //         createdAt: "",
  //         name: "kuch nhi"
  //       });
  //       console.log("Document written with ID: ", docRef);
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }
  //   }
  // };
  const sendMessage = async () => {
    if (auth.currentUser) {
      const addData = await setDoc(
        doc(db, "cities", "LB"),
        {
          // name: "Los Angeles",
          // state: "CA",
          // country: "USA",
          // address: "57/34"
          add: "hijjj",
        },
        { merge: false }
      );

      console.log(addData);
    }
  };
  return (
    <div>
      <button onClick={sendMessage}>send message</button>
    </div>
  );
}

export default SendMsg;
