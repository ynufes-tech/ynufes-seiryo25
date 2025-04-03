<script setup lang="ts">
import HeaderComponent from '~/components/HeaderComponent.vue'
</script>

<template>
  <div class="layout-root">
  <HeaderComponent />
  <slot />
  <div class="background-container">
    <div class="background-img" />
  </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.page-root {
  padding-top: 4rem;
}
</style>
<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;
.layout-root {
  font-family: 'Zen Old Mincho', sans-serif;
  color: #eee;
  position: relative;
  font-size: 24px;
  @include lg {
    font-size: 22px;
  }
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 17px;
  }
}
p {
  font-size: 24px;
  @include lg {
    font-size: 22px;
  }
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 17px;
  }
}
.background-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -100;
  overflow: hidden;
}
.background-img {
  background-image: url(@/assets/images/home-background-img.png);
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -100;
  @include sm {
    background-image: url(@/assets/images/mobile-background-img.png);
  }
}
</style>