import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function SignOut() {
  const signOutWithGoogle = () => {
    signOut(auth);
  };
  return (
    <div>
      <div className="inline-flex rounded-md shadow cursor-pointer">
        <div
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          onClick={signOutWithGoogle}
        >
          Sign out 
        </div>
      </div>
    </div>
  );
}

export default SignOut;
