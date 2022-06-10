import { Database } from "lib/constants";

export interface IAxiosResponse {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  error?: any;
}

export interface IMongoDbAxiosConfig {
  url: string;
  method?: string;
  headers?: any;
  params?: any;
}

export interface IRequestConfig {
  dbName?: Database;
  url: string;
  method?: string;
  params?: any;
  headers?: any;
}
