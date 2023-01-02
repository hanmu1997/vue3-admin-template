import { Axios } from './Axios'
export const axios = new Axios({
  transform: {
    createRequestInterceptors(config, options) {
      return config
    },
    createResponseInterceptors(res) {
      return res.data.data
    },
  },
})
