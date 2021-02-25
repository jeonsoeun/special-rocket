/** @format */

import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './balance';
import graphReducer from './graph';

const store = configureStore({
  reducer: {
    graph: graphReducer,
    balance: balanceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
