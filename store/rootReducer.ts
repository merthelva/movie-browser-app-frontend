import { combineReducers, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { genresReducer, moviesReducer } from "./slices";

const combinedReducer = combineReducers({
  genres: genresReducer,
  movies: moviesReducer,
});

const rootReducer = (state: any, action: PayloadAction<any>) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };

    return nextState;
  }

  return combinedReducer(state, action);
};

export default rootReducer;
