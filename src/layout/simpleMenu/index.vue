<template>
    <div>
        <el-menu mode="vertical" :ellipsis="false">
            <SimpleSubMenu />
        </el-menu>
    </div>
</template>
<script setup lang="ts">
import SimpleSubMenu from './simpleSubMenu.vue'
</script>
<style lang="less" scoped></style>
