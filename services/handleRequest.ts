import {
  createMongoDbAxiosInstance,
  createTMDBAxiosInstance,
} from "./axiosInstance";

import { IRequestConfig, IAxiosResponse } from "./instance.interface";

import { Database } from "lib/constants";

const handleRequest = async ({
  url,
  method,
  dbName = Database.TMBD,
  body,
  ...rest
}: IRequestConfig) => {
  let instance = await createTMDBAxiosInstance();
  if (dbName === Database.MONGODB) {
    instance = await createMongoDbAxiosInstance({
      url,
      method,
      ...rest,
    });
  }

  try {
    const response: IAxiosResponse = await instance({
      url,
      method,
      data: body,
      ...rest,
    });

    return response;
  } catch (error) {
    return error;
  }
};

export default handleRequest;
