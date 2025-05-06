<script lang="ts" setup>
import { ref } from "vue";

const showMenu = ref(false);
const toggle = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <div class="navi-menu">
    <!-- メニューが展開されていないときのみボタンを表示 -->
    <img
      v-if="!showMenu"
      src="~/assets/images/menu-button.webp"
      alt="Menu Button"
      class="menu-button"
      @click="toggle"
    />
    <div v-show="showMenu" class="nav-list-wrapper">
      <!-- 背景画像 -->
      <img
        src="~/assets/images/NaviBack.webp"
        alt="Menu Background"
        class="background-image"
      />
      <!-- メニュー右上にバツ印ボタン -->
      <img
        src="~/assets/images/ShrinkButton.webp"
        alt="Close Menu"
        class="close-button"
        @click="toggle"
      />
      <nav>
        <ul class="nav-list">
          <li>
            <NuxtLink to="/" @click="toggle">TOP</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/news" @click="toggle">NEWS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" @click="toggle">ABOUT</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/pamphlet" @click="toggle">PAMPHLET</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/official" @click="toggle">OFFICIAL-EVENTS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/events" @click="toggle">EVENTS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contest" @click="toggle">CONTEST</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/access" @click="toggle">ACCESS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/staff" @click="toggle">STAFF</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about-us" @click="toggle">ABOUT-US</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/faq" @click="toggle">FAQ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/sponsor" @click="toggle">SPONSOR</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.navi-menu {
  z-index: 10000;
  position: relative;
}

.menu-button {
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 120px;

  @include md {
    width: 85px;
    height: 36px;
  }
}

/* 画像ボタンのホバーアクション */
.menu-button:hover {
  transform: scale(1.1);
}

.nav-list-wrapper {
  position: fixed; /* 固定位置に変更 */
  top: 0; /* 上部を最上部に固定 */
  left: 0; /* 左端を固定 */
  width: 100%; /* 幅を画面幅に対応 */
  height: 100vh; /* 高さを画面全体に */
  z-index: 10000;
  display: flex;
  flex-direction: column;
  //align-items: center;
  //justify-content: center;
  overflow: hidden; /* 背景画像がはみ出さないようにする */
}

/* 背景画像のスタイル */
.background-image {
  position: absolute;
  top: 0; /* 上部を画面上端に固定 */
  left: 0;
  width: 100%; /* 幅を画面幅に合わせる */
  height: 100%; /* 高さを画面全体に合わせる */
  object-fit: fill; /* デフォルトでは画面幅にぴったり合わせる */
  z-index: -1; /* 背景として配置 */
}

/* 画面幅700px以下で別の背景画像を適用 */
@media (max-width: 768px) {
  .background-image {
    content: url("~/assets/images/NaviBackMB.webp"); /* 別の画像を適用 */
  }
}

/* 画面幅380px以下で縦横比を維持し、上部を画面上端に固定 */
@media (max-width: 380px) {
  .background-image {
    object-fit: contain; /* 縦横比を維持して画像を表示 */
    object-position: top; /* 画像の上部を画面上端に固定 */
    top: 0; /* 上部を画面上端に固定 */
  }
}

/* 縮小ボタンのスタイル */
.close-button {
  position: absolute;
  top: 2rem; /* 上端からの余白を増やす */
  right: 4rem; /* 右端からの余白を増やす */
  width: 70px; /* ボタンの幅を増やして横長にする */
  height: 40px; /* ボタンの高さを90%に調整 */
  @include md {
    top: 1.5rem; /* 上端からの余白を増やす */
    right: 2.5rem; /* 右端からの余白を増やす */
    width: 42px; /* ボタンの幅を増やして横長にする */
    height: 24px; /* ボタンの高さを90%に調整 */
  }
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.25);
  }
}

/* リストのスタイル */
.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  //text-align: center;

  @include md {
    padding: 0;
  }
}

.nav-list li {
  margin-bottom: 2rem;

  &:hover {
    transform: translateY(-2px) scale(1.1);
    color: #666666;
    transition: transform 0.3s ease;
  }
  &:nth-child(1) {
    top: 10%; /* 最初の項目 */
    margin: 2rem 0 1rem 22vw;
    @include md {
      margin: 1.5rem 0 1rem 30vw;
    }
  }
  &:nth-child(2) {
    top: 10%; /* 最初の項目 */
    margin: 0 0 1rem 22.5vw;
    @include md {
      margin: 1.5rem 0 1rem 37vw;
    }
  }
  &:nth-child(3) {
    top: 10%; /* 最初の項目 */
    margin: 0 0 1rem 23.5vw;
    @include md {
      margin: 1.5rem 0 1rem 40vw;
    }
  }
  &:nth-child(4) {
    top: 10%; /* 最初の項目 */
    margin: 0 0 1rem 24.7vw;
    @include md {
      margin: 1.5rem 0 1rem 41vw;
    }
  }
  &:nth-child(5) {
    top: 10%; /* 最初の項目 */
    margin: 0 0 1rem 26.7vw;
    @include md {
      margin: 1.5rem 0 1rem 41vw;
    }
  }
  &:nth-child(6) {
    top: 10%; /* 最初の項目 */
    margin: 0 0 1rem 28.5vw;
    @include md {
      margin: 1.5rem 0 1rem 38vw;
    }
  }
  &:nth-child(7) {
    top: 10%; /* 最初の項目 */
    margin: 0 0 1rem 31.5vw;
    @include md {
      margin: 1.5rem 0 1rem 35.5vw;
    }
  }
  &:nth-child(8) {
    top: 10%; /* 最初の項目 */
    margin: 0 0 1rem 35.5vw;
    @include md {
      margin: 1.5rem 0 1rem 32vw;
    }
  }
  &:nth-child(9) {
    top: 10%; /* 最初の項目 */
    margin: 0 0 1rem 39.5vw;
    @include md {
      margin: 1.5rem 0 1rem 28vw;
    }
  }
}

.nav-list li a {
  color: #333333;
  text-decoration: none;
  font-weight: 300;
  letter-spacing: 2px;
  transition: transform 0.3s ease, color 0.3s ease;
  font-size: 1.5rem;

  @include md {
    font-size: 1.2rem;
  }
}

.nav-list li a:hover {
  transform: scale(1.2);
  color: #666666;
}

.nav-list li a.router-link-active {
  text-decoration: underline;
}
</style>
