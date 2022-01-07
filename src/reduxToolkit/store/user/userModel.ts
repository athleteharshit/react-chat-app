type UserModel = {
  user: User;
};

export type User = {
  displayName: string;
  email: string;
  emailVerified: boolean;
  photoURL: string;
};

const user: User = {
  displayName: "",
  email: "",
  emailVerified: false,
  photoURL: "",
};

export const USER_INITIAL_STATE: UserModel = {
  user,
};

export const USER = "user";
