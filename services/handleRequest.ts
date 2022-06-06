import handleCreateAxiosInstance from "./axiosInstance";

import { IRequestConfig, IAxiosResponse } from "./instance.interface";

const handleRequest = async ({ url, method, ...rest }: IRequestConfig = {}) => {
  const instance = await handleCreateAxiosInstance();

  try {
    const response: IAxiosResponse = await instance({
      url,
      method,
      ...rest,
    });

    return response;
  } catch (error) {
    return error;
  }
};

export default handleRequest;
