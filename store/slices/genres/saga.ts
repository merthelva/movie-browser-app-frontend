import { call, put, takeLatest } from "redux-saga/effects";

import { GenresActions } from ".";

import { IResponse } from "interface";
import { handleRequest } from "services";

function* fetchGenresStarterSaga() {
  const response: IResponse = yield call(handleRequest, {
    url: "/genre/movie/list",
  });

  if (response.status === 200) {
    yield put(GenresActions.fetchGenresSuccess(response.data));
  } else {
    yield put(GenresActions.fetchGenresFailed(response));
  }
}

function* rootSaga() {
  yield takeLatest(GenresActions.fetchGenresRequest, fetchGenresStarterSaga);
}

export default rootSaga;
