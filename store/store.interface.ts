import { Store } from "@reduxjs/toolkit";
import { Task } from "redux-saga";

export interface ISagaStore extends Store {
  sagaTask?: Task;
}
