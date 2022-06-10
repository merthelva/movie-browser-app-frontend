import { createAction } from "@reduxjs/toolkit";

export const fetchUserRequest = createAction("user/fetchUserRequest");

export const fetchUserSuccess = createAction(
  "user/fetchUserSuccess",
  function prepare({ results }) {
    return {
      payload: {
        user: results,
      },
    };
  }
);

export const fetchUserFailed = createAction(
  "user/fetchUserFailed",
  function prepare({ message, response: { status } }) {
    return {
      payload: {
        message,
        statusCode: status,
      },
    };
  }
);
