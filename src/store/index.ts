import { createPinia } from 'pinia'
import { App } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const store = createPinia()
store.use(piniaPluginPersistedstate)
export function setupPinia(app: App) {
  app.use(store)
}

export default store
