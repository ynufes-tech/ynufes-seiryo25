<script lang="ts" setup>
import { ref } from 'vue'

const showMenu = ref(false)
const toggle = () => {
  showMenu.value = !showMenu.value
}
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
    >
    <div
      v-show="showMenu"
      class="nav-list-wrapper"
    >
      <!-- 背景画像 -->
      <img
        src="~/assets/images/NaviBack.webp"
        alt="Menu Background"
        class="background-image"
      >
      <!-- メニュー右上にバツ印ボタン -->
      <img
        src="~/assets/images/ShrinkButton.webp"
        alt="Close Menu"
        class="close-button"
        @click="toggle"
      >
      <nav>
        <ul class="nav-list">
          <li>
            <NuxtLink
              to="/"
              class="link"
              @click="toggle"
            >TOP
              <div class="jptxt">トップ</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/news"
              class="link"
              @click="toggle"
            >NEWS
              <div class="jptxt">最新情報</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="link"
              @click="toggle"
            >ABOUT
              <div class="jptxt">清陵祭について</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/pamphlet"
              class="link"
              @click="toggle"
            >PAMPHLET
              <div class="jptxt">公式パンフレット</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              id="official"
              to="/official"
              class="link"
              @click="toggle"
            >OFFICIAL-EVENTS
              <div class="jptxt">本部企画紹介</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/events"
              class="link"
              @click="toggle"
            >EVENTS
              <div class="jptxt">企画団体一覧</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contest"
              class="link"
              @click="toggle"
            >CONTEST
              <div class="jptxt">企画コンテスト</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contest"
              class="link"
              @click="toggle"
            >MAP
              <div class="jptxt">キャンパスマップ</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/access"
              class="link"
              @click="toggle"
            >ACCESS
              <div class="jptxt">大学までのアクセス</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/staff"
              class="link"
              @click="toggle"
            >STAFF
              <div class="jptxt">お問い合わせ</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about-us"
              class="link"
              @click="toggle"
            >ABOUT-US
              <div class="jptxt">大学祭実行委員会について</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/faq"
              class="link"
              @click="toggle"
            >FAQ
              <div class="jptxt">よくあるご質問</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/sponsor"
              class="link"
              @click="toggle"
            >SPONSOR
              <div class="jptxt">協賛企業一覧</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/connection"
              class="link"
              @click="toggle"
            >CONNECTION
              <div class="jptxt">他大学の学祭の紹介</div>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <ColorSNS />
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
  cursor: pointer;
  transition: transform 0.3s ease;

  @include md {
    top: 1.5rem; /* 上端からの余白を増やす */
    right: 2.5rem; /* 右端からの余白を増やす */
    width: 42px; /* ボタンの幅を増やして横長にする */
    height: 24px; /* ボタンの高さを90%に調整 */
  }

  &:hover {
    transform: scale(1.25);
  }
}

/* リストのスタイル */
.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;

  @include md {
    padding: 0;
  }
}

.nav-list li {
  margin-bottom: 2rem;

  &:hover {
    transform: translateY(-1px) scale(1.01);
    color: #666666;
    transition: transform 0.3s ease;
  }

  &:nth-child(1) {
    top: 10%; /* 最初の項目 */
    margin: 4vh 0 3vh 22vw;
    @include md {
      margin: 1.5rem 0 2vh 30vw;
    }
  }

  &:nth-child(2) {
    top: 5%; /* 最初の項目 */
    margin: -2vh 0 3vh 22.1vw;
    @include md {
      margin: 1vh 0 2vh 37vw;
    }
  }

  &:nth-child(3) {
    top: 5%; /* 最初の項目 */
    margin: -2vh 0 3vh 22.5vw;
    @include md {
      margin: 1vh 0 2vh 40vw;
    }
  }

  &:nth-child(4) {
    top: 5%; /* 最初の項目 */
    margin: -2vh 0 3vh 23.1vw;
    @include md {
      margin: 1vh 0 2vh 41vw;
    }
  }

  &:nth-child(5) {
    top: 5%; /* 最初の項目 */
    margin: -2vh 0 3vh 24vw;
    @include md {
      margin: 1vh 0 2vh 40vw;
    }
  }

  &:nth-child(6) {
    top: 5%; /* 最初の項目 */
    margin: -2vh 0 3vh 25.3vw;
    @include md {
      margin: 1vh 0 2vh 38vw;
    }
  }

  &:nth-child(7) {
    top: 5%; /* 最初の項目 */
    margin: -2vh 0 3vh 27.1vw;
    @include md {
      margin: 1vh 0 2vh 35.5vw;
    }
  }

  &:nth-child(8) {
    top: 5%; /* 最初の項目 */
    margin: -2vh 0 3vh 29.5vw;
    @include md {
      margin: 1vh 0 2vh 32vw;
    }
  }

  &:nth-child(9) {
    top: 5%; /* 最初の項目 */
    margin: -2vh 0 3vh 32.5vw;
    @include md {
      margin: 1vh 0 2vh 30vw;
    }
  }

  &:nth-child(10) {
    top: 5%; /* 最初の項目 */
    margin: -2.5vh 0 3vh 37vw;
    @include md {
      margin: 1vh 0 2vh 27vw;
    }
  }

  &:nth-child(11) {
    top: 5%; /* 最初の項目 */
    margin: -2.5vh 0 3vh 42.5vw;
    @include md {
      margin: 1vh 0 2vh 24.5vw;
    }
  }

  &:nth-child(12) {
    top: 5%; /* 最初の項目 */
    margin: -2.5vh 0 3vh 48.7vw;
    @include md {
      margin: 1vh 0 2vh 25.5vw;
    }
  }

  &:nth-child(13) {
    top: 5%; /* 最初の項目 */
    margin: -2.5vh 0 3vh 55.5vw;
    @include md {
      margin: 1vh 0 2vh 30vw;
    }
  }

  &:nth-child(14) {
    top: 5%; /* 最初の項目 */
    margin: -2.5vh 0 3vh 64vw;
    @include md {
      margin: 1vh 0 2vh 38vw;
    }
  }
}

.link {
  display: flex;
}

.jptxt {
  margin: auto 0 2px 0;
  padding-left: 1vw;
  font-size: 14px;
  letter-spacing: 0.5px;

  @include md {
    font-size: 11px;
    padding-left: 1vw;
  }
}

#official {
  @include md {
    font-size: 1.1rem;
  }
  @include sm {
    font-size: 0.8rem;
    letter-spacing: 1px;
    .jptxt {
      font-size: 9px;
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
  @include sm {
    font-size: 1rem;
    letter-spacing: 1px;
  }
}

.nav-list li a:hover {
  transform: scale(1.05);
  color: #666666;
}

.nav-list li a.router-link-active {
  text-decoration: underline;
}

.color-sns {
  margin: auto 3vh 12vh auto;
  @include md {
    margin: auto 2vh 7vh auto;
  }
}
</style>
