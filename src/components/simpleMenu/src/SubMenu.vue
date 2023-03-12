<template>
  <!-- 菜单项 -->
  <MenuItem
    v-if="!data?.children"
    :index="data?.path"
    :title="data?.meta?.title"
  />

  <!-- 针对单个子节点节点的场景 -->
  <MenuItem
    v-else-if="data?.children?.length == 1"
    :index="data?.children?.[0]?.path"
    :title="data?.children?.[0]?.meta?.title"
  />

  <!-- 子菜单 -->
  <el-sub-menu v-else :index="data?.path">
    <template #title>{{ data?.meta?.title }}</template>
    <SubMenu
      v-for="(child, index) in data?.children"
      :key="index"
      :index="child.path"
      :data="child"
    />
  </el-sub-menu>
</template>
<script lang="ts">
export default defineComponent({
  name: 'SubMenu',
})
</script>
<script setup lang="ts">
import { defineComponent } from 'vue'
import MenuItem from './MenuItem.vue'
const props = defineProps({
  data: {
    type: Object,
  },
})
</script>

<style lang="less" scoped></style>
