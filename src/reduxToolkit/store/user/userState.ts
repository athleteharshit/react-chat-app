import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithGoogle, USER, USER_INITIAL_STATE } from "./userModel";
import { setUser, signIn } from "../../../utils/firebase/function";
import { serverTimestamp } from "firebase/firestore";

export namespace UserState {
  export const signInUserWithGoogle = createAsyncThunk(
    signInWithGoogle,
    async (id, { rejectWithValue }) => {
      try {
        const user = await signIn();
        const { displayName, uid }: any = user;
        const createUser = {
          uid,
          name: displayName,
          createdAt: serverTimestamp(),
          isOnline: true,
        };
        const result = await setUser(createUser);
        console.log(user, result);
        return user;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const slice = createSlice({
    name: USER,
    initialState: USER_INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(signInUserWithGoogle.pending, (state, { payload }) => {});
      builder.addCase(signInUserWithGoogle.fulfilled, (state, { payload }) => {
        const { displayName, email, emailVerified, photoURL }: any = payload;
        state.displayName = displayName;
        state.email = email;
        state.emailVerified = emailVerified;
        state.photoURL = photoURL;
      });
      builder.addCase(
        signInUserWithGoogle.rejected,
        (state, { payload }) => {}
      );
    },
  });
}
