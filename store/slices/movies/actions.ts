import { createAction } from "@reduxjs/toolkit";

export const fetchMoviesPerPageRequest = createAction(
  "movies/fetchMoviesPerPageRequest",
  function prepare(data = 1) {
    return {
      payload: {
        page: data,
      },
    };
  }
);

export const fetchMoviesPerPageSuccess = createAction(
  "movies/fetchMoviesPerPageSuccess",
  function prepare(data) {
    return {
      payload: data,
    };
  }
);

export const fetchMoviesPerPageFailed = createAction(
  "movies/fetchMoviesPerPageFailed",
  function prepare({ message, response: { status } }) {
    return {
      payload: {
        message,
        statusCode: status,
      },
    };
  }
);
