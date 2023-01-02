import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { AxiosTransform } from './axiosTransform'
interface AxiosOptions extends AxiosRequestConfig {
  transform: AxiosTransform
}
export class Axios {
  private axiosInstance: AxiosInstance
  //   这是自定义的请求格式
  private options: AxiosOptions
  constructor(opts: AxiosOptions) {
    this.options = opts
    this.axiosInstance = axios.create(opts)
    this.setInterceptors()
  }
  setInterceptors() {
    const transform = this.options.transform
    const { createRequestInterceptors, createResponseInterceptors } = transform
    this.axiosInstance.interceptors.request.use((config) => {
      if (createRequestInterceptors)
        config = createRequestInterceptors(config, this.options)
      return config
    })
    this.axiosInstance.interceptors.response.use((res) => {
      if (createResponseInterceptors) res = createResponseInterceptors(res)
      return res
    })
  }
  request(config, options?) {
    return this.axiosInstance.request(config)
  }
  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'GET' })
  }
  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'POST' })
  }
}
