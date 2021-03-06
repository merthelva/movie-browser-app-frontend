import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeLatest } from "redux-saga/effects";

import {
  UserActions,
  ISignupRequestAction,
  ILoginRequestAction,
  IWatchlistMovie,
  UserSelectors,
} from ".";

import { IResponse } from "interface";
import { cookie } from "lib/utilities";
import { handleRequest } from "services";
import { AuthMode, Database } from "lib/constants";

function* loginUserStarterSaga(action: ILoginRequestAction) {
  const result: IResponse = yield call(handleRequest, {
    url: "/auth/login",
    dbName: Database.MONGODB,
    method: "post",
    body: { ...action.payload },
  });

  if ((result.status as number) < 400) {
    const { token, userId } = result.data;

    yield call(cookie.set, "token", token, {}, undefined);
    yield call(cookie.set, "userId", userId, {}, undefined);
    yield call(cookie.set, "authMode", AuthMode.LOGIN, {}, undefined);
    yield put(UserActions.loginSuccess(token, userId));
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
    yield call(cookie.set, "authMode", AuthMode.SIGNUP, {}, undefined);
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
    yield call(cookie.set, "authMode", -1, {}, undefined);
  }
  yield put(UserActions.logoutSuccess());
}

function* fetchWatchlistStarterSaga(action: PayloadAction<string>) {
  const result: IResponse = yield call(handleRequest, {
    url: "/watchlist/all",
    dbName: Database.MONGODB,
    method: "get",
    params: { userId: action.payload },
  });

  if ((result.status as number) < 400) {
    const watchlist = result.data.watchlist;

    yield put(UserActions.fetchWatchlistSuccess(watchlist));
  } else {
    yield put(UserActions.fetchWatchlistFailed(result.response.data.reason));
  }
}

function* addMovieToWatchlistStarterSaga(
  action: PayloadAction<{ movieDetails: IWatchlistMovie; userId: string }>
) {
  const result: IResponse = yield call(handleRequest, {
    url: "/watchlist/add-movie",
    dbName: Database.MONGODB,
    method: "post",
    params: { userId: action.payload.userId },
    body: { ...action.payload.movieDetails },
  });

  if ((result.status as number) < 400) {
    const addedMovie = result.data.addedMovie;

    yield put(UserActions.addMovieToWatchlistSuccess(addedMovie));
  } else {
    yield put(
      UserActions.addMovieToWatchlistFailed(result.response.data.reason)
    );
  }
}

function* removeMovieFromWatchlistStarterSaga(
  action: PayloadAction<{ id: string | number; userId: string }>
) {
  const result: IResponse = yield call(handleRequest, {
    url: "/watchlist/remove-movie",
    dbName: Database.MONGODB,
    method: "post",
    params: { userId: action.payload.userId },
    body: { id: action.payload.id },
  });

  if ((result.status as number) < 400) {
    const removedMovieId = result.data.id;

    yield put(UserActions.removeMovieFromWatchlistSuccess(removedMovieId));
  } else {
    yield put(
      UserActions.removeMovieFromWatchlistFailed(result.response.data.reason)
    );
  }
}

function* rootSaga() {
  yield takeLatest(UserActions.loginRequest, loginUserStarterSaga);
  yield takeLatest(UserActions.signupRequest, signupUserStarterSaga);
  yield takeLatest(UserActions.logoutRequest, logoutUserStarterSaga);
  yield takeLatest(
    UserActions.fetchWatchlistRequest,
    fetchWatchlistStarterSaga
  );
  yield takeLatest(
    UserActions.addMovieToWatchlistRequest,
    addMovieToWatchlistStarterSaga
  );
  yield takeLatest(
    UserActions.removeMovieFromWatchlistRequest,
    removeMovieFromWatchlistStarterSaga
  );
}

export default rootSaga;
