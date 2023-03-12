<template>
  <div class="flex">
    <SimpleMenu
      class="w-300px"
      :data="getMenus"
      @menu-item-click="handleClickMenuItem"
    />
    <div class="flex-1">
      <RouterView #default="{ Component }">
        <Transition>
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Layout',
}
</script>
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
