import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
export class Axios {
  private axiosInstance: AxiosInstance
  //   这是自定义的请求格式
  private options
  constructor(opts) {
    this.options = opts
    this.axiosInstance = axios.create(opts)
    this.setInterceptors()
  }
  setInterceptors() {
    //
  }
  request(config, options?) {
    return this.axiosInstance.request(config)
  }
  get(config: AxiosRequestConfig) {
    this.request({ ...config, method: 'GET' })
  }
  post(config: AxiosRequestConfig) {
    this.request({ ...config, method: 'POST' })
  }
}
