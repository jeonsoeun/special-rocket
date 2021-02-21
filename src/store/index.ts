/** @format */

import { configureStore } from "@reduxjs/toolkit";
import graphReducer from "./graph";

const store = configureStore({
  reducer: {
    graph: graphReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
