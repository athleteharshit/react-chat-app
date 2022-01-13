import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userList } from "../../../utils/firebase/function";
import { chatList, UserList } from "./userModel";

export namespace ChatListState {
  export const fetchUserList = createAsyncThunk(
    chatList,
    async (uid: string | undefined, { rejectWithValue }) => {
      try {
        const result = await userList(uid);
        return result;
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
