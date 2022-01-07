import { createSlice } from "@reduxjs/toolkit";
import { UserActions } from "./userAction";
import { USER, USER_INITIAL_STATE } from "./userModel";

export namespace UserState {
  export const slice = createSlice({
    name: USER,
    initialState: USER_INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(UserActions.updateUser, (state, { payload }) => {
        const { displayName, email, emailVerified, photoURL } = payload;
        state.user.displayName = displayName;
        state.user.email = email;
        state.user.emailVerified = emailVerified;
        state.user.photoURL = photoURL;
      });
    },
  });
}
