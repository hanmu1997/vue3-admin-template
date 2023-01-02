import { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import windicss from 'vite-plugin-windicss'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default (): UserConfigExport => {
  return {
    plugins: [vue(), vueJSX(), windicss(), viteMockServe()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  }
}
