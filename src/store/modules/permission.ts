import { defineStore } from 'pinia'
import { getMenus } from '@/apis/permission'
import { generateRoutes } from '@/router/helpers/routeHelper'
import { joinParentPath } from '@/router/helpers/menuHelper'
export const usePermissionStore = defineStore('permissionStore', {
  state: () => {
    return {
      menus: [],
      hasAddRoutes: false,
    }
  },
  getters: {
    getMenus(state) {
      return state.menus
    },
    getHasAddRoutes(state) {
      return state.hasAddRoutes
    },
  },
  actions: {
    // 构建路由，同时生成菜单
    async buildRoutes() {
      const menus = await getMenus()
      this.setMenus(joinParentPath(menus))
      return generateRoutes(menus)
    },
    setMenus(menus) {
      this.menus = menus
    },
    setHasAddRoutes(value) {
      this.hasAddRoutes = value
    },
  },
})
