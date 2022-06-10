import { Status } from "lib/constants";

export interface IInitialState {
  userId: string | null;
  token: string | null;
  watchList: any[];
  status: Status;
  error: {
    message: string | null; // TODO: We may create an object map which overrides default error messages for each error status code
    statusCode: number | null;
  };
}
