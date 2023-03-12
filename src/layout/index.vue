<template>
  <div class="flex">
    <SimpleMenu
      class="w-200px"
      :menus="getMenus"
      @menu-item-click="handleClickMenuItem"
    />
    <div class="">
      <RouterView #default="{ Component }">
        <Transition>
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </div>
</template>
<script setup lang="ts">
import SimpleMenu from '@/components/simpleMenu'
import { usePermissionStore } from '@/store/modules/permission'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const permissionStore = usePermissionStore()
const getMenus = computed(() => permissionStore.getMenus)
const handleClickMenuItem = (path: string) => {
  router.push(path)
}
</script>
<style lang="less" scoped></style>
