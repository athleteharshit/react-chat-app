import { useState, useEffect } from "react";
import { ChatItem } from "react-chat-elements";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

function ChatList() {
  const [users, setUsers] = useState<any[]>([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user?.uid) {
      const q = query(collection(db, "users"));
      onSnapshot(q, (querySnapshot) => {
        let users: any[] = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().uid !== user?.uid) {
            users.push(doc.data());
          }
        });
        setUsers([...users]);
      });
    }
  }, [user?.uid]);

  return (
    <div>
      {users?.length > 0 &&
        users.map((user: any) => (
          <ChatItem
            key={user.uid}
            avatar={user.photoURL}
            alt={user.name}
            title={user.name}
            subtitle={user.isOnline ? "Online" : "Offline"}
            // date={user.createdAt.seconds}
            // unread={0}
          />
        ))}
    </div>
  );
}

export default ChatList;
