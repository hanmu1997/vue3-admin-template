import { menuRecordRaw } from 'vue-menur'

/**
 * 添加父节点路径
 * @param menus 菜单记录
 * @param parentPath 父节点路径
 * @returns 菜单记录
 */
export function joinParentPath(menus, parentPath = '') {
  menus.forEach((menu) => {
    if (!menu.path.startsWith('/')) {
      menu.path = `${parentPath}/${menu.path}`
    }
    if (menu.children?.length) {
      joinParentPath(menu.children, menu.path)
    }
  })
  return menus
}
