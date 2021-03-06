import { useAppDispatch } from "../reduxToolkit/store/appStore";
import { UserState } from "../reduxToolkit/store/user/userState";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const signInWithGoogle = () => {
    dispatch(UserState.signInUserWithGoogle(navigate));
  };

  const signInWithFacebook = () => {};

  return (
    <div className="bg-gray-50 h-full">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Welcome to react-chat</span>
          <span className="block text-indigo-600">
            Start your free trial today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow cursor-pointer">
            <div
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </div>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow cursor-pointer">
            <div
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              onClick={signInWithFacebook}
            >
              Sign in with Meta
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
