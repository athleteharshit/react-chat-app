import { createSelector } from "@reduxjs/toolkit";
import { selectRoot } from "../selectRoot";

export namespace UserSelectors {
  export const user = createSelector(selectRoot, (state) => state.user);
  export const userList = createSelector(selectRoot, (state) => state.userList);
}
