import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { router } from '@/router/index'
import { setupPinia } from './store'
const app = createApp(App)
setupPinia(app)
app.use(ElementPlus).use(router)
app.mount('#app')
