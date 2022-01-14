import { Navigate } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase";

const PrivateRoute = ({ children }: any) => {
  // const [user] = useAuthState(auth);
  const userL = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : null;

  return userL ? children : <Navigate to="/" />;
};

export default PrivateRoute;
