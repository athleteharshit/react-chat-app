import ChatList from "./chatList";
import Navbar from "./navbar";

function Chat() {
  return (
    <div>
      <Navbar />
      {/* {true ? (
        <div className="container mx-auto flex">
          <div className="basis-3/12">
            <ChatList />
          </div>
          <div className="basis-9/12">
            <h1>hello msg</h1>
          </div>
        </div>
      ) : (
        <div>
          <h1>not authenticated</h1>
        </div>
      )} */}
    </div>
  );
}

export default Chat;
