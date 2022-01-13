import { combineReducers } from "@reduxjs/toolkit";
import { ChatListState } from "./user/chatListState";
import { UserState } from "./user/userState";

export const getRootReducer = () => {
  return combineReducers({
    user: UserState.slice.reducer,
    userList: ChatListState.slice.reducer,
  });
};
