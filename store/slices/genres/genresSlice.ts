import { createSlice } from "@reduxjs/toolkit";

import { GenresActions, IInitialState } from ".";
import { Status } from "lib/constants";

const initialState: IInitialState = {
  genres: [],
  status: Status.INIT,
  error: {
    message: null,
    statusCode: null,
  },
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GenresActions.fetchGenresRequest, (state) => {
        state.status = Status.LOADING;
        state.error.message = null;
        state.error.statusCode = null;
      })
      .addCase(GenresActions.fetchGenresSuccess, (state, action) => {
        state.status = Status.LOADED;
        state.genres = action.payload.genres;
      })
      .addCase(GenresActions.fetchGenresFailed, (state, action) => {
        state.status = Status.FAILED;
        state.genres = [];
        state.error.message = action.payload.message;
        state.error.statusCode = action.payload.statusCode;
      });
  },
});

export default genresSlice.reducer;
