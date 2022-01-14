import ChatList from "./chatList";
import Navbar from "./navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";

function Chat() {
  const [users, setUsers] = useState<any[]>([]);
  const divRef = useRef<any>(null);
  const [chatStarted, setChatStarted] = useState(false);
  const [chatUser, setChatUser] = useState<any>({});
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

  const onClick = (user: any) => {
    console.log(user);
    setChatStarted(true);
    setChatUser(user);
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
                temporibus est, earum placeat quidem animi dolorum quibusdam,
                beatae recusandae molestiae, dolore explicabo nam adipisci id ab
                reprehenderit accusantium nemo voluptates. Vel, perspiciatis,
                minima nobis, suscipit iure blanditiis hic eius ducimus
                perferendis veritatis harum quaerat itaque! Nam soluta
                accusantium accusamus incidunt ullam magnam. Debitis accusantium
                consequuntur! Ex illo id sapiente temporibus expedita suscipit,
                a vero dolore ipsum quo laudantium facilis eaque molestiae iure
                vel voluptatibus optio quod odio dolorem ratione fuga et
                cupiditate nesciunt. Iure repellendus ut et porro consectetur!
                Nulla, quis.
              </div>
            ) : null}
            <div ref={divRef}></div>
          </div>
          <div>
            {chatStarted ? (
              <div>
                <input
                  // id="password"
                  // name="password"
                  // type="password"
                  // autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Message"
                />
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                  Sign in
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
