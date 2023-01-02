<template>
  <div>
    <el-menu mode="vertical" :ellipsis="false">
      <SimpleSubMenu v-for="(item, index) in items" :key="index" :item="item" />
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import SimpleSubMenu from './simpleSubMenu.vue'
const props = defineProps({
  items: {
    type: Array,
  },
})
</script>
<style lang="less" scoped></style>
