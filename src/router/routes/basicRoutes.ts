import { RouteRecordRaw } from 'vue-router'
export const loginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
}

export const rootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/overview',
}

export const notFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('@/views/notFound/index.vue'),
}

export const redirectRoute: RouteRecordRaw = {
  path: '/redirect',
  name: 'Redirect',
  component: () => import('@/views/redirect/index.vue'),
}
