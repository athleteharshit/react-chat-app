import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import Chat from "./components/chat";
import SignIn from "./components/signIn";
import { auth } from "./firebase";

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div>{user ? <Chat /> : <SignIn />}</div>
    </div>
  );
}

export default App;
