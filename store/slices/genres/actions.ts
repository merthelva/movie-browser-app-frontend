import { createAction } from "@reduxjs/toolkit";

export const fetchGenresRequest = createAction("genres/fetchGenresRequest");

export const fetchGenresSuccess = createAction(
  "genres/fetchGenresSuccess",
  function prepare(data) {
    return {
      payload: {
        genres: data,
      },
    };
  }
);

export const fetchGenresFailed = createAction(
  "genres/fetchGenresFailed",
  function prepare({ message, response: { status } }) {
    return {
      payload: {
        message,
        statusCode: status,
      },
    };
  }
);
