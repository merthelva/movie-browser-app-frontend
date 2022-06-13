import { createSlice } from "@reduxjs/toolkit";

import { MoviesActions, IInitialState } from ".";

import { Status } from "lib/constants";

const initialState: IInitialState = {
  moviesPerPage: [],
  totalPages: 1,
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
      if (state.page < state.totalPages) {
        state.page++;
      }
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
        state.totalPages = action.payload.totalPages;
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
