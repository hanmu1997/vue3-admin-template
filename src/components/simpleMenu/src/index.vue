<template>
  <div>
    <el-menu mode="vertical" :ellipsis="false">
      <SubMenu v-for="(item, index) in data" :key="index" :data="item" />
    </el-menu>
  </div>
</template>
<script lang="ts">
export default {
  name: 'SideMenu',
}
</script>
<script setup lang="ts">
import SubMenu from './SubMenu.vue'
import { emitter } from '@/utils/emitter'
const props = defineProps({
  data: {
    type: Object,
  },
})
const emits = defineEmits(['menuItemClick'])
emitter.on('on-menu-item-click', (name: string) => {
  emits('menuItemClick', name)
})
</script>
<style lang="less" scoped></style>
