import { Router } from 'vue-router'
import { usePermissionStore } from '@/store/modules/permission'
import PagePathEnum from '@/enums/pagePathEnum'
const WHITE_LIST = [PagePathEnum.NOT_FOUND, PagePathEnum.LOGIN]
export const setupRouterGuard = (router: Router) => {
  createPageGuard(router)
  createPermissionGuard(router)
  createLoadingGuard(router)
}

function createPageGuard(router) {
  // 主要设置一下,
}

function createPermissionGuard(router: Router) {
  const permissionStore = usePermissionStore()
  router.beforeEach(async (to, from, next) => {
    const { name, path, query } = to
    if (WHITE_LIST.includes(path as PagePathEnum)) {
      next()
      return
    }
    if (permissionStore.getHasAddRoutes) {
      next()
      return
    }
    const routes = await permissionStore.buildRoutes()
    routes.forEach((route) => router.addRoute(route))
    permissionStore.setHasAddRoutes(true)
    if (name == 'NotFound') {
      next({ path, query, replace: true })
      return
    }
  })
}

function createLoadingGuard(router) {}
