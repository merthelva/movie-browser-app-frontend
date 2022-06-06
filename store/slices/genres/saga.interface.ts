import { Status } from "lib/constants";

export interface IInitialState {
  genres: any;
  status: Status;
  error: {
    message: string | null;
    statusCode: number | null;
  };
}
