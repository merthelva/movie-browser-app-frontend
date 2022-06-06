import { createSelector } from "@reduxjs/toolkit";

const selectMovies = (state: any) => state.movies;

export const makeSelectMoviesList = createSelector(
  selectMovies,
  ({ list }) => list
);

export const makeSelectMoviesStatus = createSelector(
  selectMovies,
  ({ status }) => status
);

export const makeSelectCurrentPage = createSelector(
  selectMovies,
  ({ page }) => page
);

export const makeSelectMoviesError = createSelector(
  selectMovies,
  ({ error }) => ({ message: error.message, statusCode: error.statusCode })
);
