import { createSlice } from "@reduxjs/toolkit";

import { UserActions, IInitialState } from ".";

import { Status } from "lib/constants";

// TODO: For consistency, "email" and "password" fields may be kept in the state as well
const initialState: IInitialState = {
  userId: null,
  token: null,
  watchList: [],
  status: Status.INIT,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UserActions.loginRequest, (state) => {
        state.status = Status.LOADING;
        state.error = null;
      })
      .addCase(UserActions.loginSuccess, (state, action) => {
        state.status = Status.LOADED;
        state.token = action.payload.token;
      })
      .addCase(UserActions.loginFailed, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.payload.error;
      })
      .addCase(UserActions.signupRequest, (state) => {
        state.status = Status.LOADING;
        state.error = null;
      })
      .addCase(UserActions.signupSuccess, (state, action) => {
        state.status = Status.LOADED;
        state.userId = action.payload.userId;
      })
      .addCase(UserActions.signupFailed, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.payload.error;
      });
  },
});

//export const { goToNextPage, goToPrevPage } = userSlice.actions;
export default userSlice.reducer;
