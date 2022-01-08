import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function SignOut() {
  const signOutWithGoogle = () => {
    signOut(auth);
  };
  return <div onClick={signOutWithGoogle}>Sign out</div>;
}

export default SignOut;
