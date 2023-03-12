<template>
  <el-menu-item :index="index" @click="handleClickMenuItem(index)">
    {{ title }}
  </el-menu-item>
</template>
<script setup lang="ts">
import { emitter } from '@/utils/emitter'
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
const handleClickMenuItem = (name: string) => {
  emitter.emit('on-menu-item-click', name)
}
</script>
<style lang="less" scoped></style>
