<template>
  <div class="min-h-screen flex flex-col">
    <div class="max-lg:hidden">
      <Header />
    </div>
    <HeaderSidebar class="lg:hidden" />
    <div class="main-content flex-grow">
      <slot></slot>
    </div>
    <span class="border-b-2 border-neutral-400/20" />
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.main-content {
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
}
</style>
