import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useAppDispatch } from "../reduxToolkit/store/appStore";
import { UserState } from "../reduxToolkit/store/user/userState";

function SignOut() {
  const dispatch = useAppDispatch();
  const [user] = useAuthState(auth);
  const signOutWithGoogle = () => {
    dispatch(UserState.signOutUserWithGoogle(user?.uid));
  };
  return <div onClick={signOutWithGoogle}>Sign out</div>;
}

export default SignOut;
