<template>
    <SimpleMenuItem
        v-if="!item?.children.length"
        :index="item?.name"
        :title="item?.title"
    />
    <el-sub-menu v-else>
        <template #title>aaa</template>
        <SimpleSubMenu
            v-for="(child, index) in item.children"
            :key="index"
            :item="child"
        />
    </el-sub-menu>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue'
import SimpleMenuItem from './simpleMenuItem.vue'
const props = defineProps({
    item: {
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
