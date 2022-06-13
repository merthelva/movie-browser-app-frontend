import { Status } from "lib/constants";

export interface IInitialState {
  moviesPerPage: any;
  totalPages: number;
  status: Status;
  error: {
    message: string | null;
    statusCode: number | null;
  };
  page: number;
}

export interface IFetchMoviesRequestAction {
  payload: {
    page: number;
  };
}
