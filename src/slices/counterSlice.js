import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incrementBy1: (state) => {
      return state+= 1;
    },
    decrementBy1: (state) => {
      return state-= 1;
    },
    incrementByX: (state, action) => {
      return state + action.payload;
    },
    decrementByX: (state, action) => {
      return state - action.payload;
    },
    set: (state, action) => {
      return state = action.payload;
    }
  },
});

export const { incrementBy1, decrementBy1, incrementByX, decrementByX, set } =
  counterSlice.actions;

export default counterSlice.reducer;
