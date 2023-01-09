<template>
  <div class="flex">
    <SimpleMenu :menus="getMenus" />
    <div class="w-0">
      <RouterView #default="{ Component }">
        <KeepAlive>
          <Transition>
            <component :is="Component" />
          </Transition>
        </KeepAlive>
      </RouterView>
    </div>
  </div>
</template>
<script setup lang="ts">
import SimpleMenu from '@/layout/simpleMenu/index.vue'
import { usePermissionStore } from '@/store/modules/permission'
import { computed } from 'vue'
const permissionStore = usePermissionStore()
const getMenus = computed(() => permissionStore.getMenus)
</script>
<style lang="less" scoped></style>
