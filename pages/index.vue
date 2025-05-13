<script setup lang="ts">
import BannerComponent from '~/components/BannerComponent.vue';

useHead({
  title: "Top | 25清陵祭公式HP~翠星~",
  meta: [
    {
      name: "description",
      content:
        "5/17,18に開催される25清陵祭の公式HPです! 最新情報を随時更新していきます!",
    },
  ],
});
</script>

<template>
  <div class="page-root">
    <div class="shooting-stars">
      <div class="shooting-star-mini">
        <img
          class="shooting-star-mini-img"
          src="@/assets/images/shooting-star_mini.webp"
        />
      </div>
      <div class="shooting-star-big">
        <img
          class="shooting-star-big-img"
          src="@/assets/images/shooting-star_big.webp"
        />
      </div>
    </div>
    <div class="page-container">
      <div class="upper-box">
        <div class="title-container">
          <img id="top-title" src="@/assets/images/title_suisei-image.webp" />
        </div>
        <div class="seiryo-logo">
          <img
            class="seiryo-logo-image"
            src="@/assets/images/seiryo-logo.webp"
          />
        </div>
        <div class="date">
          <p>5/17 <span class="weekday">Sat.</span> 13:00 - 20:30</p>
          <p>5/18 <span class="weekday">Sun.</span> 9:00 - 15:00</p>
        </div>
        <SNS />
        <BannerComponent />
      </div>
      <div class="top-pictures-wrapper">
        <div class="top-pictures">
          <img class="top-img_nm" src="/assets/images/top1-img.webp" />
          <img class="top-img_re" src="/assets/images/top2-img.webp" />
          <img class="top-img_nm" src="/assets/images/top3-img.webp" />
          <img class="top-img_re" src="/assets/images/top4-img.webp" />
          <img class="top-img_nm" src="/assets/images/top5-img.webp" />
          <img class="top-img_re" src="/assets/images/top6-img.webp" />
          <img class="top-img_nm" src="/assets/images/top7-img.webp" />
          <img class="top-img_re" src="/assets/images/top8-img.webp" />
          <img class="top-img_nm" src="/assets/images/top9-img.webp" />
          <img class="top-img_re" src="/assets/images/top10-img.webp" />
        </div>
      </div>
      <div class="top-buttons">
        <div class="light-title_nm">
          <p>ABOUT</p>
        </div>
        <TopButton title="清陵祭を知る" page-link="/about" class="button1 middle" />
        <div class="light-title_re">
          <p>NEWS</p>
        </div>
        <TopButton title="最新情報を見る" page-link="/news" class="button2 middle" />
      </div>
      <div class="under-buttons">
        <div class="row">
          <div class="square-button-set">
            <div class="square-buttons-wrapper">   
              <NuxtLink to="/official" class="image-button">
                <img src="~/assets/images/square1.webp" alt="本部企画紹介" class="square-button"/>
                <span class="button-text">本部企画紹介</span>
              </NuxtLink>
            </div>
            <div class="square-buttons-wrapper">
              <NuxtLink to="/events" class="image-button">
                <img src="~/assets/images/square2.webp" alt="企画団体一覧" class="square-button"/>
                <span class="button-text">企画団体一覧</span>
              </NuxtLink>
            </div>
          </div>
          <TopButton title="大学までのアクセス" page-link="/access" class="button3 small" />
        </div>
        <div class="row">
          <div class="colmn-buttons-wrapper">
            <TopButton title="よくあるご質問" page-link="/faq" class="button4 small" />
            <TopButton title="お問い合わせ" page-link="/staff" class="button4 small" />
          </div>
          <div class="square-button-set">
            <div class="square-buttons-wrapper">   
              <NuxtLink to="/pamphlet" class="image-button">
                <img src="~/assets/images/square3.webp" alt="公式パンフレット" class="square-button"/>
                <span class="button-text">公式パンフレット</span>
              </NuxtLink>
            </div>
            <div class="square-buttons-wrapper">
              <NuxtLink to="/map" class="image-button">
                <img src="~/assets/images/square4.webp" alt="キャンパスマップ" class="square-button"/>
                <span class="button-text">キャンパスマップ</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="square-button-set">
            <div class="square-buttons-wrapper">   
              <NuxtLink to="/sponsor" class="image-button">
                <img src="~/assets/images/square1.webp" alt="ご協賛企業一覧" class="square-button" />
                <span class="button-text">ご協賛企業一覧</span>
              </NuxtLink>
            </div>
            <div class="square-buttons-wrapper">
              <NuxtLink to="/about-us" class="image-button">
                <img src="~/assets/images/square2.webp" alt="実行委員会について" class="square-button" />
                <span class="button-text">実行委員会について</span>
              </NuxtLink>
            </div>
          </div>
          <div class="colmn-buttons-wrapper">
            <TopButton title="企画コンテスト" page-link="/contest" class="button3 small" />
            <TopButton title="他大学の学祭のご紹介" page-link="/connection" class="button3 small" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="preparing"> -->
      <!-- <div class="pre-message"> -->
        <!-- <p>準備中</p> -->
      <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.page-root {
  position: relative;
  height: auto;
  padding: 20vh 0;
}

.page-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}

.upper-box {
  position: relative;
  top: 70vh;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.shooting-stars {
  z-index: -10;
}

.shooting-star-mini {
  position: absolute;
  top: 0;
  right: 40vw;
  width: 8vw;
  @media (max-width: 730px) {
    display: none;
  }
}

.shooting-star-mini img {
  width: 400px;
  @media (max-width: 840px) {
    width: 300px;
  }
}

.shooting-star-big {
  position: absolute;
  top: 0;
  right: 0;
}

.shooting-star-big img {
  width: 500px;
  @media (max-width: 940px) {
    width: 400px;
  }
  @media (max-width: 730px) {
    width: 260px;
  }
  @media (max-width: 445px) {
    width: 200px;
  }
}

.title-container {
  display: flex;
  justify-content: center;
}

.title-container img {
  width: auto;
  height: min(30vh, 30vw);
}

.seiryo-logo {
  display: flex;
  justify-content: center;
}
.seiryo-logo img {
  width: auto;
  height: min(30vh, 30vw);
}

.date {
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: min(1.5rem, 3.5vw);
  color: #eee;
  box-sizing: border-box;
  text-shadow: 0 0 10px #05e6ff, 0 0 10px #65fbc2;
  margin: 0 auto;
  width: min(65vw, 28em);
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 1.5em;
  font-family: "Cinzel", sans-serif;
  @include sm {
    margin-top: 35vw;
  }
}

.weekday {
  font-family: "Amiri", sans-serif;
}

.top-pictures-wrapper {
  margin-top: 30vh;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.top-pictures {
  display: flex;
  width: max-content;
  animation: scrollLeft 50s linear infinite; // 遅めが自然です
}

.top-img_nm {
  height: 200px;
  flex-shrink: 0; // 縮まないように
}

.top-img_re {
  height: 200px;
  margin: 4rem 5rem 0; // 間隔調整
  flex-shrink: 0; // 縮まないように
}

@keyframes scrollLeft {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.light-title_nm {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 5vw;
  font-size: 90px;
  letter-spacing: 0.1em;
  width: fit-content;
  color: transparent;
  -webkit-text-stroke: 1px #21fce3;
  text-shadow: 10px 10px 35px #65fbc2;
  font-weight: 300;
  z-index: 1000;
  @include md {
    font-size: 74px;
  }
  @include sm {
    font-size: 54px;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
}

.light-title_re {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-left: 55vw;
  font-size: 90px;
  letter-spacing: 0.1em;
  width: fit-content;
  color: transparent;
  -webkit-text-stroke: 1px #21fce3;
  text-shadow: 10px 10px 35px #65fbc2;
  font-weight: 300;
  z-index: 1000;
  @include md {
    font-size: 74px;
    margin: 0 5vw;
  }
  @include sm {
    font-size: 54px;
  }
  p {
    margin-bottom: 0;
  }
}

.square-button {
  width: 200px;
  margin: 0;
  display: block;
  height: auto;
}

.square-button-set {
  display: flex;
  justify-content: space-around;
  @include sm {
    display: flex;
    flex-direction: column;
  }
}

.square-buttons-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  margin: 0 4vh;
  @include md {
    margin: 0 2vh;
  }
  @include sm {
    margin-top: 5rem;
  }
}

.image-button {
  position: relative;
  display: inline-block;
}

.row {
  display: flex;
  margin-top: 35vh;
  
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin: 10vh 0;
    gap: 5vh;
  }
}

.button-text {
  color: #fff;
  text-decoration: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.6);
  pointer-events: none;
  white-space: nowrap;
}

.top-buttons {
  margin-top: 20vh;
}

.under-buttons {
  position: relative;
  margin-top: 30vh;
  @include md {
    margin-top: 0;
  }
}

.button1 {
  display: flex;
  justify-content: flex-start;
  margin-top: 0;
}

.button2 {
  display: flex;
  justify-content: flex-end;
}

.middle {
  @include md {
    width: 450px;
    height: auto;
  }
  @include sm {
    width: 320px;
    height: auto;
  }
}

.button3 {
  display: block;
  margin-left: auto; // ← 右寄せ
  margin-right: 0;
  margin-top: 5vh;
}

.button4 {
  display: flex;
  justify-content: flex-start;
  margin-top: 5vh;
}

.colmn-buttons-wrapper {
  width: 100%;
}

.small {
  width: 400px;
  @include md {
    width: 450px;
    height: auto;
  }
  @include sm {
    width: 320px;
    height: auto;
  }
}

// .preparing{
//   display: flex;
//   justify-content: center;
//   margin: 30vh 0;
// }

// .pre-message{
// font-size: 40px;
// color: #eee;
// }
</style>