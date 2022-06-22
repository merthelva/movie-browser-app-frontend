import { createSelector } from "@reduxjs/toolkit";

const selectMovies = (state: any) => state.movies;

export const makeSelectMoviesPerPage = createSelector(
  selectMovies,
  ({ moviesPerPage }) => moviesPerPage
);

export const makeSelectMoviesStatus = createSelector(
  selectMovies,
  ({ status }) => status
);

export const makeSelectCurrentPage = createSelector(
  selectMovies,
  ({ page }) => page
);

export const makeSelectTotalPages = createSelector(
  selectMovies,
  ({ totalPages }) => totalPages
);

export const makeSelectMoviesError = createSelector(
  selectMovies,
  ({ error }) => ({ message: error.message, statusCode: error.statusCode })
);
