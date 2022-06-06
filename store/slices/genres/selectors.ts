import { createSelector } from "@reduxjs/toolkit";

const selectGenres = (state: any) => state.genres;

export const makeSelectGenres = createSelector(
  selectGenres,
  ({ genres }) => genres
);

export const makeSelectGenresStatus = createSelector(
  selectGenres,
  ({ status }) => status
);

export const makeSelectGenresError = createSelector(
  selectGenres,
  ({ error }) => ({ message: error.message, statusCode: error.statusCode })
);
