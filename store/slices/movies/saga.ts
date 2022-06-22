import { call, put, takeLatest } from "redux-saga/effects";

import { MoviesActions, IFetchMoviesRequestAction } from ".";

import { IResponse } from "interface";
import { handleRequest } from "services";

function* fetchMoviesStarterSaga(action: IFetchMoviesRequestAction) {
  const response: IResponse = yield call(handleRequest, {
    url: "/movie/popular",
    params: {
      page: action.payload.page,
    },
  });

  if (response.status === 200) {
    yield put(MoviesActions.fetchMoviesPerPageSuccess(response.data.results));
  } else {
    yield put(MoviesActions.fetchMoviesPerPageFailed(response));
  }
}

function* rootSaga() {
  yield takeLatest(
    MoviesActions.fetchMoviesPerPageRequest,
    fetchMoviesStarterSaga
  );
}

export default rootSaga;
