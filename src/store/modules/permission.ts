import { defineStore } from 'pinia'
export const usePermissionStore = defineStore('permissionStore', {
  state: () => {
    return {
      menus: [],
    }
  },
  getters: {
    getMenus(state) {
      return state.menus
    },
  },
  actions: {
    setMenus(menus) {
      this.menus = menus
    },
  },
  persist: true,
})
