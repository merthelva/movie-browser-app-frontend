import { all } from "redux-saga/effects";

import { moviesRootSaga } from "./slices";

export default function* rootSaga() {
  yield all([moviesRootSaga()]);
}
