import { createSlice } from "@reduxjs/toolkit";

import { MoviesActions, IInitialState } from ".";

import { Status } from "lib/constants";

const initialState: IInitialState = {
  moviesPerPage: [],
  status: Status.INIT,
  page: 1,
  error: {
    message: null,
    statusCode: null,
  },
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    goToNextPage(state) {
      // TODO: Add a limitation for the upper limit of page number that can be visited. In API response, there is a field called "total_pages". Make use of it!
      state.page++;
    },
    goToPrevPage(state) {
      if (state.page > 1) {
        state.page--;
      }
    },
  },
  extraReducers: (builder) => {
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
  },
});

export const { goToNextPage, goToPrevPage } = moviesSlice.actions;
export default moviesSlice.reducer;
