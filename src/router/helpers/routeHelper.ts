const routeMap = new Map()
routeMap.set('Layout', () => import('@/layout/index.vue'))
/**
 * 根据后端返回的路由记录构造路由记录
 * @param routes 后端返回的路由记录
 * @returns Array<RouteRecordRaw>
 */
export function transformObjToRoutes(routes: Array<any>) {
  routes.forEach((route) => {
    if (route.component == 'Layout') {
      route.component = routeMap.get('Layout')
    }
    if (route.children.length) {
      asyncImportRoutes(route.children)
    }
  })
  return routes
}

/**
 * 递归构造路由记录
 * @param routes 后端返回的路由记录
 */
function asyncImportRoutes(routes: Array<any>) {
  const viewModules = import.meta.glob('../../views/**/*.vue')
  routes.forEach((route) => {
    route.component = dynamicImport(viewModules, route.component)
    if (route?.children?.length) asyncImportRoutes(route.children)
  })
}

/**
 * 返回指定的模块
 * @param modules
 * @param name
 */
function dynamicImport(modules, name: string): () => Promise<unknown> {
  const moduleIndex = '../..' + name
  return modules[moduleIndex]
}
