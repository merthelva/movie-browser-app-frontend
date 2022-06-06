import { all } from "redux-saga/effects";

import { genresRootSaga, moviesRootSaga } from "./slices";

export default function* rootSaga() {
  yield all([moviesRootSaga(), genresRootSaga()]);
}
