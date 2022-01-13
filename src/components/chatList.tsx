import { useEffect } from "react";
import { ChatItem } from "react-chat-elements";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAppDispatch } from "../reduxToolkit/store/appStore";
import { auth } from "../firebase";
import { ChatListState } from "../reduxToolkit/store/user/chatListState";
import { useSelector } from "react-redux";
import { UserSelectors } from "../reduxToolkit/store/user/userSelector";

function ChatList() {
  const [user] = useAuthState(auth);
  const dispatch = useAppDispatch();
  const { users } = useSelector(UserSelectors.userList);

  useEffect(() => {
    dispatch(ChatListState.fetchUserList(user?.uid));
  }, [user?.uid]);
  console.log("users", users);
  return (
    <div>
      <ChatItem
        avatar={"https://facebook.github.io/react/img/logo.svg"}
        alt={"Reactjs"}
        title={"Facebook"}
        subtitle={"What are you doing?"}
        date={new Date()}
        unread={0}
      />
    </div>
  );
}

export default ChatList;
