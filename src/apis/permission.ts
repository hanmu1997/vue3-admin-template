import { axios } from '../utils/http'

export const getMenus = () => {
  return axios.post({ url: '/getMenus' })
}
