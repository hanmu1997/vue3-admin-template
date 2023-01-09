import { Router } from 'vue-router'

export const setupRouterGuard = (router: Router) => {
  createPageGuard(router)
  createPermissionGuard(router)
  createLoadingGuard(router)
}

function createPageGuard(router) {
  // 主要设置一下,
}

function createPermissionGuard(router) {}

function createLoadingGuard(router) {
  //
}
