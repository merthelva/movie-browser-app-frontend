import { createSlice } from "@reduxjs/toolkit";

import { UserActions, IInitialState } from ".";

import { Status } from "lib/constants";

const initialState: IInitialState = {
  userId: null,
  token: null,
  watchList: [],
  status: Status.INIT,
  error: {
    message: null,
    statusCode: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  /* extraReducers: (builder) => {
    builder
      .addCase(MoviesActions.fetchMoviesPerPageRequest, (state, action) => {
        state.status = Status.LOADING;
        state.moviesPerPage = [];
        state.error.message = null;
        state.error.statusCode = null;
        state.page = action.payload.page;
      })
      .addCase(MoviesActions.fetchMoviesPerPageSuccess, (state, action) => {
        state.status = Status.LOADED;
        state.moviesPerPage = action.payload.movies;
      })
      .addCase(MoviesActions.fetchMoviesPerPageFailed, (state, action) => {
        state.status = Status.FAILED;
        state.moviesPerPage = [];
        state.error.message = action.payload.message;
        state.error.statusCode = action.payload.statusCode;
      });
  }, */
});

//export const { goToNextPage, goToPrevPage } = userSlice.actions;
export default userSlice.reducer;
