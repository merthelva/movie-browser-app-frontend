import { call, put, select, takeLatest } from "redux-saga/effects";

import {
  UserActions,
  ISignupRequestAction,
  ILoginRequestAction,
  UserSelectors,
} from ".";

import { IResponse } from "interface";
import { handleRequest } from "services";
import { Database } from "lib/constants";
import { cookie } from "lib/utilities";

function* loginUserStarterSaga(action: ILoginRequestAction) {
  const result: IResponse = yield call(handleRequest, {
    url: "/auth/login",
    dbName: Database.MONGODB,
    method: "post",
    body: { ...action.payload },
  });

  if ((result.status as number) < 400) {
    const token = result.data.token;

    yield call(cookie.set, "token", token, {}, undefined);
    yield put(UserActions.loginSuccess(token));
  } else {
    yield put(UserActions.loginFailed(result.response.data.reason));
  }
}

function* signupUserStarterSaga(action: ISignupRequestAction) {
  const result: IResponse = yield call(handleRequest, {
    url: "/auth/signup",
    dbName: Database.MONGODB,
    method: "post",
    body: { ...action.payload },
  });

  if ((result.status as number) < 400) {
    const userId = result.data.userId;

    yield call(cookie.set, "userId", userId, {}, undefined);
    yield put(UserActions.signupSuccess(userId));
  } else {
    yield put(UserActions.signupFailed(result.response.data.reason));
  }
}

function* logoutUserStarterSaga() {
  const isAuthenticated: boolean = yield select(
    UserSelectors.makeSelectIsAuthenticated
  );

  if (isAuthenticated) {
    yield call(cookie.remove, "token", undefined);
    yield call(cookie.remove, "userId", undefined);
  }
  yield put(UserActions.logoutSuccess());
}

function* rootSaga() {
  yield takeLatest(UserActions.loginRequest, loginUserStarterSaga);
  yield takeLatest(UserActions.signupRequest, signupUserStarterSaga);
  yield takeLatest(UserActions.logoutRequest, logoutUserStarterSaga);
}

export default rootSaga;
