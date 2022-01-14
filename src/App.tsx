import "./App.css";
import Chat from "./components/chat";
import SignIn from "./components/signIn";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
