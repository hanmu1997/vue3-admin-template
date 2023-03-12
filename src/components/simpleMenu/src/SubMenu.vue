<template>
  <!-- 菜单项 -->
  <MenuItem
    v-if="!menu?.children.length"
    :index="menu?.name"
    :title="menu?.meta.title"
  />

  <!-- 子菜单 -->
  <el-sub-menu v-else :index="menu?.name">
    <template #title>{{ menu?.meta?.title }}</template>
    <SimpleSubMenu
      v-for="(child, index) in menu.children"
      :key="index"
      :index="child.path"
    />
  </el-sub-menu>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue'
import MenuItem from './MenuItem.vue'
const props = defineProps({
  menu: {
    type: Object,
  },
})
</script>
<script lang="ts">
export default defineComponent({
  name: 'SimpleSubMenu',
})
</script>
<style lang="less" scoped></style>
