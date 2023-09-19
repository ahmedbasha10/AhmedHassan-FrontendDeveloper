import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Api/api";
import AuthReducer from "./Slices/Auth-Slice";
import { authApiSlice } from "./Api/AuthApi";
import { saveState } from "./Localstorage";

const statesNames = {
  AUTH_STATE: "authState",
};

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(authApiSlice.middleware),
});

store.subscribe(() => {
  const authState = store.getState().auth;
  saveState(authState, statesNames.AUTH_STATE);
});
