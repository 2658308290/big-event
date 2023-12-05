<script setup>
defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>
<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>{{ title }}</span>
        <slot name="extra"></slot>
      </div>
    </template>
    <slot></slot>
  </el-card>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .button {
    background-color: rgb(55, 158, 217);
    color: aliceblue;
  }
}
</style>
