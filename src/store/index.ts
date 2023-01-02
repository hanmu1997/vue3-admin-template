import { createPinia } from 'pinia'
import { App } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export function setupPinia(app: App) {
  app.use(pinia)
}
