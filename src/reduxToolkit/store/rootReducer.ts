import { combineReducers } from "@reduxjs/toolkit";
import { UserState } from "./user/userState";

export const getRootReducer = () => {
  return combineReducers({
    appUser: UserState.slice.reducer,
  });
};
