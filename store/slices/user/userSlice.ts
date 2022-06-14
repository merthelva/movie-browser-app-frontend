import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserActions, IInitialState } from ".";

import { Status } from "lib/constants";

const initialState: IInitialState = {
  userId: null,
  token: null,
  isAuthenticated: false,
  watchlist: [],
  status: Status.INIT,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    setUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
  },
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
      })
      .addCase(UserActions.logoutRequest, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(UserActions.logoutSuccess, (state) => {
        state.status = Status.INIT;
        state.userId = null;
        state.token = null;
        state.isAuthenticated = false;
      })
      .addCase(UserActions.logoutFailed, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.payload.errorMsg;
      })
      .addCase(UserActions.fetchWatchlistRequest, (state) => {
        state.status = Status.LOADING;
        state.error = null;
      })
      .addCase(UserActions.fetchWatchlistSuccess, (state, action) => {
        state.status = Status.LOADED;
        state.watchlist = action.payload.watchlist;
      })
      .addCase(UserActions.fetchWatchlistFailed, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.payload.error;
        state.watchlist = [];
      });
  },
});

export const { setIsAuthenticated, setUserId } = userSlice.actions;
export default userSlice.reducer;
