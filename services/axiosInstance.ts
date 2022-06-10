import { IMongoDbAxiosConfig } from "./instance.interface";

const lazyImportAxios = async () => {
  const axios = await (await import("axios")).default;
  return axios;
};

export const createTMDBAxiosInstance = async () => {
  const axios = await lazyImportAxios();

  const instance = axios.create({
    baseURL: process.env.TMDB_BASE_URL,
    method: "get",
    params: { api_key: process.env.TMDB_API_KEY },
  });

  return instance;
};

export const createMongoDbAxiosInstance = async (
  config: IMongoDbAxiosConfig
) => {
  const axios = await lazyImportAxios();

  const instance = axios.create({
    baseURL: process.env.MONGODB_BASE_URL,
    ...config,
  });

  return instance;
};
