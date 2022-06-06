import { Status } from "lib/constants";

export interface IInitialState {
  moviesPerPage: any;
  status: Status;
  error: {
    message: string | null; // TODO: We may create an object map which overrides default error messages for each error status code
    statusCode: number | null;
  };
  page: number;
}

export interface IFetchMoviesRequestAction {
  payload: {
    page: number;
  };
}
