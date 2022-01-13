import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInWithGoogle,
  signOutWithGoogle,
  USER,
  USER_INITIAL_STATE,
} from "./userModel";
import {
  logOut,
  setUser,
  signIn,
  updateUser,
} from "../../../utils/firebase/function";
import { serverTimestamp } from "firebase/firestore";

export namespace UserState {
  export const signInUserWithGoogle = createAsyncThunk(
    signInWithGoogle,
    async (id, { rejectWithValue }) => {
      try {
        const user = await signIn();
        const { displayName, uid, email, emailVerified, photoURL }: any = user;
        const createUser = {
          uid,
          name: displayName,
          createdAt: serverTimestamp(),
          isOnline: true,
        };
        const result = await setUser(createUser);
        const payload = { displayName, email, emailVerified, photoURL };
        console.log(user, result);
        return payload;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const signOutUserWithGoogle = createAsyncThunk(
    signOutWithGoogle,
    async (uid: string | undefined, { rejectWithValue }) => {
      try {
        await updateUser(uid);
        await logOut();
        return {};
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
        const { displayName, email, emailVerified, photoURL } = payload;
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
