import { createAction } from "@reduxjs/toolkit";
import { USER} from "./userModel";

export namespace UserActions {
  const prefix = (name: string) => `${USER}/${name}`;

  export const updateUser = createAction<any>(prefix("signIn"));
}
