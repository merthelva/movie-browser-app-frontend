import { call, put, takeLatest } from "redux-saga/effects";

import { UserActions, ISignupRequestAction, ILoginRequestAction } from ".";

import { IResponse } from "interface";
import { handleRequest } from "services";
import { Database } from "lib/constants";

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

    yield put(UserActions.signupSuccess(userId));
  } catch (error: any) {
    //yield put(UserActions.signupFailed(error.response.data.reason));
    yield put(UserActions.signupFailed("Signup failed"));
  }
}

function* rootSaga() {
  yield takeLatest(UserActions.loginRequest, loginUserStarterSaga);
  yield takeLatest(UserActions.signupRequest, signupUserStarterSaga);
}

export default rootSaga;
