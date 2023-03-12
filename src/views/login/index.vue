<template>
  <div>
    <h2>login</h2>
    <el-button @click="login">login</el-button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { usePermissionStore } from '@/store/modules/permission'
const permissionStore = usePermissionStore()
const router = useRouter()

const login = async () => {
  const routes = await permissionStore.buildRoutes()
  routes.forEach((route) => router.addRoute(route))
  permissionStore.setHasAddRoutes(true)
  router.push('/dashboard')
}
</script>
<style lang="less" scoped></style>
