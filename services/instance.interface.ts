export interface IAxiosResponse {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  error?: any;
}

export interface IRequestConfig {
  url?: string;
  method?: string;
  params?: any;
  headers?: any;
}
