import Navbar from "./navbar";
import ReceivedMsg from "./receivedMsg";
import SendMsg from "./sendMsg";

function Chat() {
  return (
    <div>
      <Navbar />
      <SendMsg />
      <ReceivedMsg />
    </div>
  );
}

export default Chat;
