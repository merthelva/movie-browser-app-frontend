import { createAction } from "@reduxjs/toolkit";

export { setIsAuthenticated, setUserId } from "./userSlice";

// TODO: Add required types for "prepare" function arguments in all actions.ts files

export const loginRequest = createAction(
  "user/loginRequest",
  function prepare({ email, password }) {
    return {
      payload: {
        email,
        password,
      },
    };
  }
);

export const loginSuccess = createAction(
  "user/loginSuccess",
  function prepare(token) {
    return {
      payload: {
        token,
      },
    };
  }
);

export const loginFailed = createAction(
  "user/loginFailed",
  function prepare(reason) {
    return {
      payload: {
        error: reason,
      },
    };
  }
);

export const signupRequest = createAction(
  "user/signupRequest",
  function prepare({ email, password, confirmPassword }) {
    return {
      payload: {
        email,
        password,
        confirmPassword,
      },
    };
  }
);

export const signupSuccess = createAction(
  "user/signupSuccess",
  function prepare(userId) {
    return {
      payload: {
        userId,
      },
    };
  }
);

export const signupFailed = createAction(
  "user/signupFailed",
  function prepare(reason) {
    return {
      payload: {
        error: reason,
      },
    };
  }
);

export const logoutRequest = createAction("user/logoutRequest");

export const logoutSuccess = createAction("user/logoutSuccess");

export const logoutFailed = createAction(
  "user/logoutFailed",
  function prepare(errorMsg) {
    return {
      payload: errorMsg,
    };
  }
);

export const fetchWatchlistRequest = createAction(
  "user/fetchWatchlistRequest",
  function prepare(userId: string) {
    return {
      payload: userId,
    };
  }
);

export const fetchWatchlistSuccess = createAction(
  "user/fetchWatchlistSuccess",
  function prepare(watchlist) {
    return {
      payload: {
        watchlist,
      },
    };
  }
);

export const fetchWatchlistFailed = createAction(
  "user/fetchWatchlistFailed",
  function prepare(reason) {
    return {
      payload: {
        error: reason,
      },
    };
  }
);
