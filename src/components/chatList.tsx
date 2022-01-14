import { ChatItem } from "react-chat-elements";

type ChatListProps = {
  users: any[];
  onClick: (user: any) => void;
};

function ChatList({ users, onClick }: ChatListProps) {
  return (
    <div>
      {users?.length > 0 &&
        users.map((user: any) => (
          <ChatItem
            onClick={() => onClick(user)}
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
