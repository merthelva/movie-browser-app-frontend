import { all } from "redux-saga/effects";

import { genresRootSaga, moviesRootSaga, userRootSaga } from "./slices";

export default function* rootSaga() {
  yield all([moviesRootSaga(), genresRootSaga(), userRootSaga()]);
}
