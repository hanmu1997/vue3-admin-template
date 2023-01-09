import { RouteRecordRaw } from 'vue-router'

export function transformRoutesToMenus(routes) {
  joinParentPath(routes)
  console.log(`routes: ${JSON.stringify(routes)}`)
  return routes
}

function joinParentPath(routes: Array<RouteRecordRaw>, parentPath = '') {
  routes.forEach((route) => {
    if (!route.path.startsWith('/')) {
      route.path = parentPath + '/' + route.path
    }
    if (route.children?.length) {
      joinParentPath(route.children, route.path)
    }
  })
}
