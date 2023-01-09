<template>
  <SimpleMenuItem
    v-if="!menu?.children.length"
    :index="menu?.name"
    :title="menu?.meta.title"
  />
  <el-sub-menu v-else :index="menu?.name">
    <template #title>{{ menu?.meta?.title }}</template>
    <SimpleSubMenu
      v-for="(child, index) in menu.children"
      :key="index"
      :item="child"
    />
  </el-sub-menu>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue'
import SimpleMenuItem from './simpleMenuItem.vue'
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
