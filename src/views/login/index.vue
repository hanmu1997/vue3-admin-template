<template>
  <div>
    <h2>login</h2>
    <el-button @click="login">getMenus</el-button>
  </div>
</template>
<script setup lang="ts">
import { getMenus } from '@/apis/permission'
import { transformObjToRoutes } from '@/router/helpers/routeHelper'
import { useRouter } from 'vue-router'
const router = useRouter()
const login = async () => {
  const menus = await getMenus()
  const routes = transformObjToRoutes(menus as any as any[])
  routes.forEach((route) => router.addRoute(route))
  router.push('/dashboard')
}
</script>
<style lang="less" scoped></style>
