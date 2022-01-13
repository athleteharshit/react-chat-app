import { Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./components/chat";
import PrivateRoute from "./components/privateRoute";
import SignIn from "./components/signIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Switch>
      <div className="min-h-screen">
        <Route exact path="/">
          <SignIn />
        </Route>
        <PrivateRoute path="/chat" exact component={<Chat />} />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Switch>
  );
}

export default App;
