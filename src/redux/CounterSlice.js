import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count = 0;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

const { reducer, actions } = counterSlice;

export const { increment, decrement, reset } = actions;

export default reducer;
