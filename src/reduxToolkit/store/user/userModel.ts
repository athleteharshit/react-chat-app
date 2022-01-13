export type User = {
  displayName: string;
  email: string;
  emailVerified: boolean;
  photoURL: string;
};

export const USER_INITIAL_STATE: User = {
  displayName: "",
  email: "",
  emailVerified: false,
  photoURL: "",
};

export const UserList: any = {
  users: [],
};

export const USER = "user";
export const signInWithGoogle = "signInWithGoogle";
export const signOutWithGoogle = "signOutWithGoogle";
export const chatList = "chatList";
