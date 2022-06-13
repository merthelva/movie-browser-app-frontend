import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware, { END } from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import { ISagaStore } from "./store.interface";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";

export const makeStore = () => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    devTools: process.env.NODE_ENV !== "production",
  });

  // 3: Run your sagas on server
  (store as ISagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

const store = makeStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const wrapper = createWrapper(makeStore, { debug: false });
