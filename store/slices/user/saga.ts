import { call, put, takeLatest } from "redux-saga/effects";

import { UserActions, ISignupRequestAction, ILoginRequestAction } from ".";

import { IResponse } from "interface";
import { handleRequest } from "services";
import { Database } from "lib/constants";
import { cookie } from "lib/utilities";

function* loginUserStarterSaga(action: ILoginRequestAction) {
  try {
    const {
      data: { token },
    }: IResponse = yield call(handleRequest, {
      url: "/auth/login",
      dbName: Database.MONGODB,
      method: "post",
      body: { ...action.payload },
    });

    yield call(cookie.set, "token", token, {}, undefined);
    yield put(UserActions.loginSuccess(token));
  } catch (error: any) {
    //yield put(UserActions.loginFailed(error.response.data.reason));
    yield put(UserActions.loginFailed("Login failed"));
  }
}

function* signupUserStarterSaga(action: ISignupRequestAction) {
  try {
    const {
      data: { userId },
    }: IResponse = yield call(handleRequest, {
      url: "/auth/signup",
      dbName: Database.MONGODB,
      method: "post",
      body: { ...action.payload },
    });

    yield call(cookie.set, "userId", userId, {}, undefined);
    yield put(UserActions.signupSuccess(userId));
  } catch (error: any) {
    //yield put(UserActions.signupFailed(error.response.data.reason));
    yield put(UserActions.signupFailed("Signup failed"));
  }
}

function* logoutUserStarterSaga() {
  yield call(cookie.remove, "token", undefined);
  yield put(UserActions.logoutSuccess());
}

function* rootSaga() {
  yield takeLatest(UserActions.loginRequest, loginUserStarterSaga);
  yield takeLatest(UserActions.signupRequest, signupUserStarterSaga);
  yield takeLatest(UserActions.logoutRequest, logoutUserStarterSaga);
}

export default rootSaga;
