import { combineReducers, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { genresReducer, moviesReducer, userReducer } from "./slices";

const combinedReducer = combineReducers({
  genres: genresReducer,
  movies: moviesReducer,
  user: userReducer,
});

const rootReducer = (state: any, action: PayloadAction<any>) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
  }

  return combinedReducer(state, action);
};

export default rootReducer;
