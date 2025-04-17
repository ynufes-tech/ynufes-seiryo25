<script setup lang="ts">
import HeaderComponent from '~/components/HeaderComponent.vue'

// クリック時にトップへ戻る関数
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<template>
  <div class="layout-root">
    <HeaderComponent />
    <slot />

    <!-- フローティングボタン -->
    <div class="floating-button" @click="scrollToTop">
      <img src="~/assets/images/floating-button.png" alt="Floating Button" />
    </div>

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
  background-image: url(@/assets/images/home-background-img.webp);
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
    background-image: url(@/assets/images/mobile-background-img.webp);
  }
}
.floating-button {
  position: fixed;
  bottom: 2rem; // 下に余裕（余白）を持たせる
  right: 2rem;  // 右に余裕を持たせる
  width: 80px;  // 元画像が例えば160pxなら半分
  height: 80px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.floating-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 80px;
  height: 80px;
  z-index: 1000; // 他の要素より上に

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    pointer-events: auto; // 念のためクリックできるように
  }
  &:hover {
    transform: scale(1.1) translateY(-2px); // 拡大 + ちょっと上に
    cursor: pointer;
  }
}
.floating-button {
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1); // 少し拡大
    cursor: pointer;       // マウスカーソルをポインターに
  }
  @include sm {
    width: 60px;
    height: 60px;
    bottom: 1.5rem;
    right: 1.5rem;
  }
}
</style>