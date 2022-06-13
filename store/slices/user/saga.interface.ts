import { Status } from "lib/constants";

interface IError {
  [key: string]: {
    message: string;
    value: string;
  };
}

export interface IInitialState {
  userId: string | null;
  token: string | null;
  isAuthenticated: boolean;
  watchList: any[];
  status: Status;
  error: IError | null;
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
