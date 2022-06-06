import { call, put, takeLatest } from "redux-saga/effects";

import { MoviesActions, IResponse, IFetchMoviesRequestAction } from ".";

import { handleRequest } from "services";

function* fetchMoviesStarterSaga(action: IFetchMoviesRequestAction) {
  const response: IResponse = yield call(handleRequest, {
    url: "/3/movie/popular",
    params: {
      page: action.payload.page,
    },
  });

  if (response.status === 200) {
    yield put(MoviesActions.fetchMoviesPerPageSuccess(response.data));
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
