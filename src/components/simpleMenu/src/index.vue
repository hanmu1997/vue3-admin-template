<template>
  <div>
    <el-menu mode="vertical" :ellipsis="false">
      <SubMenu v-for="(menu, index) in menus" :key="index" :menu="menu" />
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import SubMenu from './SubMenu.vue'
import mitt from 'mitt'
const props = defineProps({
  menus: {
    type: Object,
  },
})
const emits = defineEmits(['menuItemClick'])
const emitter = mitt()
emitter.on('on-menu-item-click', (name: string) => {
  emits('menuItemClick', name)
})
</script>
<style lang="less" scoped></style>
