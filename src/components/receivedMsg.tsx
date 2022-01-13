import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function ReceivedMsg() {
  async function receivedMessage() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      function docData(doc: any) {
        return doc.data();
      }
      console.log(docData(doc));
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
