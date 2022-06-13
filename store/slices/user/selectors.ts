import { createSelector } from "@reduxjs/toolkit";

const selectUser = (state: any) => state.user;

export const makeSelectUserId = createSelector(
  selectUser,
  ({ userId }) => userId
);

export const makeSelectUserToken = createSelector(
  selectUser,
  ({ userToken }) => userToken
);

export const makeSelectIsAuthenticated = createSelector(
  selectUser,
  ({ isAuthenticated }) => isAuthenticated
);

export const makeSelectUserWatchList = createSelector(
  selectUser,
  ({ watchList }) => watchList
);

export const makeSelectUserStatus = createSelector(
  selectUser,
  ({ status }) => status
);

export const makeSelectUserError = createSelector(
  selectUser,
  ({ error }) => error
);
