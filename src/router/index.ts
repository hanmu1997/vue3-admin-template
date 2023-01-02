import { createRouter, createWebHashHistory } from 'vue-router'
import {
  rootRoute,
  notFoundRoute,
  redirectRoute,
  loginRoute,
} from '@/router/routes'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [rootRoute, notFoundRoute, redirectRoute, loginRoute],
})
