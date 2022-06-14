import { Status } from "lib/constants";

interface IError {
  [key: string]: {
    message: string;
    value: string;
  };
}

export interface IWatchlistMovie {
  id: string | number;
  title: string;
  rate: string | number;
  releaseDate: string;
  duration: string;
  budget: string;
}

export interface IInitialState {
  userId: string | null;
  token: string | null;
  isAuthenticated: boolean;
  watchlist: IWatchlistMovie[];
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
