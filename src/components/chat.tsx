import { useSelector } from "react-redux";
import { UserSelectors } from "../reduxToolkit/store/user/userSelector";
import Navbar from "./navbar";
import SignOut from "./signOut";

function Chat() {
  const user = useSelector(UserSelectors.user);
  console.log(user);
  return (
    <div>
      <Navbar />
      <SignOut />
      <h1>chat</h1>
    </div>
  );
}

export default Chat;
