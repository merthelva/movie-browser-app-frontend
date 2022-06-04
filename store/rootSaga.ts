import { all, takeLatest } from "redux-saga/effects";

function* helloSaga() {
  console.log("Hello Sagas!");
}

export default function* rootSaga() {
  yield all([takeLatest("PRINT_TO_CONSOLE", helloSaga)]);
}
