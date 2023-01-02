import { AxiosRequestConfig, AxiosResponse } from 'axios'

export abstract class AxiosTransform {
  createRequestInterceptors?: (
    config: AxiosRequestConfig,
    options
  ) => AxiosRequestConfig
  createResponseInterceptors?: (res: AxiosResponse) => AxiosResponse
}
