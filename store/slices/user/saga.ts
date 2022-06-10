import { call, put, takeLatest } from "redux-saga/effects";

import { UserActions } from ".";

import { IResponse } from "interface";
import { handleRequest } from "services";

function* fetchUserStarterSaga() {
  const response: IResponse = yield call(handleRequest, {
    url: "/movie/popular",
  });

  if (response.status === 200) {
    yield put(UserActions.fetchUserSuccess(response.data));
  } else {
    yield put(UserActions.fetchUserFailed(response));
  }
}

function* rootSaga() {
  yield takeLatest(UserActions.fetchUserRequest, fetchUserStarterSaga);
}

export default rootSaga;
