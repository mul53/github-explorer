import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";
import repos from "./repos/reducer";

const PERSISTED_KEYS: string[] = ["repos.repos"];

const store = configureStore({
  reducer: {
    repos,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: false }),
    save({ states: PERSISTED_KEYS }),
  ],
  preloadedState: load({ states: PERSISTED_KEYS }),
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
