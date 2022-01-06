import { combineReducers } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

export const increment = createAction("counter/increment");
export const decrement = createAction("counter/decrement");
export const incrementByAmount = createAction<number>(
  "counter/incrementByAmount"
);

const initialState = { value: 0 } as CounterState;

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++;
    })
    .addCase(decrement, (state, action) => {
      state.value--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    });
});

export const getRootReducer = () => {
  return combineReducers({
    counterReducer,
  });
};
