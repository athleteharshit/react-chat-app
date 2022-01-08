import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function ReceivedMsg() {
  //   useEffect(() => {
  //     async function receivedMessage() {
  //       const querySnapshot = await getDocs(collection(db, "users"));
  //       querySnapshot.forEach((doc) => {
  //         console.log(`${doc.id} => ${doc.data()}`);
  //       });
  //     }
  //   }, []);
  async function receivedMessage() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }
  return (
    <div>
      received message
      <button onClick={receivedMessage}>receivedMessage</button>
    </div>
  );
}

export default ReceivedMsg;
