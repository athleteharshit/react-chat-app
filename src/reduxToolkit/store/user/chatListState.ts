import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { chatList, UserList } from "./userModel";
// import { collection, onSnapshot, query } from "firebase/firestore";
// import { db } from "../../../firebase";
// import { userList } from "../../../utils/firebase/function";

export namespace ChatListState {
  export const fetchUserList = createAsyncThunk(
    chatList,
    async (uid: string | undefined, { rejectWithValue }) => {
      try {
        // const result = await userList(uid);
        // const q = query(collection(db, "users"));
        // onSnapshot(q, (querySnapshot) => {
        //   let users: any[] = [];
        //   querySnapshot.forEach((doc) => {
        //     if (doc.data().uid !== uid) {
        //       users.push(doc.data());
        //     }
        //     console.log(users, "snapshot");
        //     return users;
        //   });
        // });
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const slice = createSlice({
    name: chatList,
    initialState: UserList,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchUserList.fulfilled, (state, { payload }) => {
        state.users = payload;
      });
    },
  });
}
