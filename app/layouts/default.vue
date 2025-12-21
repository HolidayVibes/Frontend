<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="main-content flex-grow">
      <slot></slot>
    </div>
    <span class="border-b-2 border-neutral-400/20" />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.main-content {
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
}
</style>
<script setup lang="ts"></script>
