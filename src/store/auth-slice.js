import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isloggedIn: false },
  reducers: {
    logIn: {
      isloggedIn: true,
    },
    logOut: {
      isloggedIn: false,
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
