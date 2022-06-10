import { Status } from "lib/constants";

export interface IInitialState {
  userId: string | null;
  token: string | null;
  watchList: any[];
  status: Status;
  error: any;
}

export interface ISignupRequestAction {
  payload: {
    email: string;
    password: string;
    confirmPassword: string;
  };
}

export interface ILoginRequestAction {
  payload: {
    email: string;
    password: string;
  };
}
