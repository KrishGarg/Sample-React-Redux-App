import { configureStore } from "@reduxjs/toolkit";

// Reducers
import counterReducer from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
