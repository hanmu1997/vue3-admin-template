import Layout from '@/layout/index.vue'
/**
 * 根据后端返回的路由记录构造路由记录
 * @param routes 后端返回的路由记录
 * @returns Array<RouteRecordRaw>
 */
export function generateRoutes(routes) {
  routes.forEach((route) => {
    if (route.component == 'Layout') {
      route.component = Layout
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
 * @param modules 模块列表
 * @param path 模块名
 */
function dynamicImport(modules, path: string): () => Promise<unknown> {
  const key = Object.keys(modules).find((moduleName) => {
    return moduleName.includes(path)
  })
  return key ? modules[key] : null
}
