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
        state.userId = action.payload.userId;
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
        state.error = null;
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
        state.status = Status.INIT;
        state.watchlist = action.payload.watchlist;
      })
      .addCase(UserActions.fetchWatchlistFailed, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.payload.error;
        state.watchlist = [];
      })
      .addCase(UserActions.addMovieToWatchlistRequest, (state) => {
        state.status = Status.LOADING;
        state.error = null;
      })
      .addCase(UserActions.addMovieToWatchlistSuccess, (state, action) => {
        state.status = Status.INIT;
        state.watchlist.push({ ...action.payload.addedMovie });
      })
      .addCase(UserActions.addMovieToWatchlistFailed, (state, action) => {
        state.status = Status.INIT;
        state.error = action.payload.error;
      })
      .addCase(UserActions.removeMovieFromWatchlistRequest, (state) => {
        state.status = Status.LOADING;
        state.error = null;
      })
      .addCase(UserActions.removeMovieFromWatchlistSuccess, (state, action) => {
        state.status = Status.INIT;
        state.watchlist = state.watchlist.filter(
          (movie) => movie.id !== action.payload.movieId
        );
      })
      .addCase(UserActions.removeMovieFromWatchlistFailed, (state, action) => {
        state.status = Status.INIT;
        state.error = action.payload.error;
      });
  },
});

export const { setIsAuthenticated, setUserId } = userSlice.actions;
export default userSlice.reducer;
