import { Status } from "lib/constants";

export interface IResponse {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  message?: string;
}

export interface IInitialState {
  list: any;
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
