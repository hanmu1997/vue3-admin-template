<template>
  <el-menu-item :index="index">{{ title }}</el-menu-item>
</template>
<script setup lang="ts">
const props = defineProps({
  index: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
})
</script>
<style lang="less" scoped></style>
