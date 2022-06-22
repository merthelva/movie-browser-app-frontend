import { createAction } from "@reduxjs/toolkit";

import { goToNextPage, goToPrevPage, goToSelectedPage } from "./moviesSlice";

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
  function prepare(movies) {
    return {
      payload: {
        movies,
      },
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

export { goToNextPage, goToPrevPage, goToSelectedPage };
