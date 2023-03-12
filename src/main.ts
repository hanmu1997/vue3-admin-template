import { createApp } from 'vue'
import 'virtual:windi.css'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { router } from '@/router/index'
import { setupPinia } from './store'
import { setupRouterGuard } from './router/guard'
const app = createApp(App)
setupPinia(app)
app.use(ElementPlus).use(router)
setupRouterGuard(router)
app.mount('#app')
