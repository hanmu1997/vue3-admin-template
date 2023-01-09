<template>
  <div>
    <el-menu mode="vertical" :ellipsis="false">
      <SimpleSubMenu v-for="(menu, index) in menus" :key="index" :menu="menu" />
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import SimpleSubMenu from './simpleSubMenu.vue'
const props = defineProps({
  menus: {
    type: Object,
  },
})
</script>
<style lang="less" scoped></style>
