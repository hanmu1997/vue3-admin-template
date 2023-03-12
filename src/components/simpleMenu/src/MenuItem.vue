<template>
  <el-menu-item :index="index" @click="handleClickMenuItem(index)">
    {{ title }}
  </el-menu-item>
</template>
<script setup lang="ts">
import mitt from 'mitt'

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
const emitter = mitt()
const handleClickMenuItem = (name: string) => {
  emitter.emit('on-menu-item-click', name)
}
</script>
<style lang="less" scoped></style>
