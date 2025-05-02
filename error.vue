<script setup lang="ts">
import HeaderComponent from '~/components/HeaderComponent.vue'
</script>

<template>
  <div>
    <div class="layout-root">
      <HeaderComponent />
      <div class="page-root">
        <div class="page-container">
          <PageTitle :title="'ERROR'" :sub-title="'404'" />
          <div class="box">
            <div class="explanation">
              <p>
                お探しのページは見つかりませんでした。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="background-container">
        <div class="background-img" />
      </div>
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

.page-container {
  flex-direction: column;
  display: flex;

  @include sm {
    margin-bottom: 5vh;
  }
}

.box {
  background-color: rgba(134, 249, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0 30px 15px rgba(134, 249, 255, 0.2);
  padding: 9% 8%;
  opacity: 90%;
  margin: 12rem 8vw 10vh;

  @include md {
    margin-top: 18rem;
    margin: 8rem 8vw 7vh;
  }

  @include sm {
    margin-top: 7rem;
    margin: 8rem 7vw 7vh;
  }
}

.explanation {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4vh;
  margin-bottom: 17vh;

  @include md {
    margin-bottom: 6vh;
  }
}

.message {
  margin-top: 10vh;

  @include md {
    margin-top: 8vh;
  }
}

p {
  font-size: 24px;

  @include md {
    font-size: 20px;
  }

  @include sm {
    font-size: 13px;
  }
}
</style>