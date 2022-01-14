import ChatList from "./chatList";
import Navbar from "./navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { MessageBox } from "react-chat-elements";

function Chat() {
  const [users, setUsers] = useState<any[]>([]);
  const divRef = useRef<any>(null);
  const [chatStarted, setChatStarted] = useState(false);
  const [chatUser, setChatUser] = useState<any>({});
  const [message, setMessage] = useState("");
  const [userUid, setUserUid] = useState(null);
  const [userConversation, setUserConversation] = useState<any[]>([]);
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

  useEffect(() => {
    if (divRef.current) {
      scrollToBottom();
    }
  }, [divRef]);

  const scrollToBottom = () => {
    if (divRef.current) {
      divRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const onClick = (secondUser: any) => {
    setChatStarted(true);
    setChatUser(secondUser);
    setUserUid(secondUser.uid);

    const q = query(
      collection(db, "conversations"),
      where("user_uid_1", "in", [user?.uid, secondUser.uid]),
      orderBy("createdAt", "asc")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const conversations: any[] = [];
      querySnapshot.forEach((doc) => {
        conversations.push(doc.data());
      });
      setUserConversation([...conversations]);
    });
  };

  const submitMessage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const msgObj = {
      user_uid_1: user?.uid,
      user_uid_2: userUid,
      message,
    };

    if (message !== "") {
      const docRef = await addDoc(collection(db, "conversations"), {
        ...msgObj,
        isView: false,
        createdAt: serverTimestamp(),
      });
      setMessage("");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex">
        <div className="basis-3/12 bg-stone-50">
          <ChatList users={users} onClick={onClick} />
        </div>
        <div className="basis-9/12 flex flex-col justify-between mainDiv">
          <div>
            <p className="bg-stone-50 h-10 flex items-center justify-center text-sm font-medium text-zinc-900 px-4 sm:px-6 lg:px-8">
              {chatStarted ? chatUser.name : null}
            </p>
          </div>
          <div className="centerDiv">
            {chatStarted ? (
              <div>
                {userConversation.length > 0 &&
                  userConversation.map((msg, index) => {
                    return (
                      <MessageBox
                        key={index}
                        position={
                          msg.user_uid_1 == user?.uid ? "right" : "left"
                        }
                        type={"text"}
                        text={msg.message}
                      />
                    );
                  })}
              </div>
            ) : null}
            <div ref={divRef}></div>
          </div>
          <div>
            {chatStarted ? (
              <div>
                <input
                  type="text"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Message"
                />
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={submitMessage}
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                  Send
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
