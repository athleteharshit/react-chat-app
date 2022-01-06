import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useAppDispatch } from "./reduxToolkit/store/appStore";
import "./App.css";
import { increment } from "./reduxToolkit/store/rootReducer";
import { selectRoot } from "./reduxToolkit/store/selectRoot";

function App() {
  const { value } = useSelector(
    createSelector(selectRoot, (state) => state.counterReducer)
  );
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={() => dispatch(increment())}>increment {value}</button>
    </div>
  );
}

export default App;
