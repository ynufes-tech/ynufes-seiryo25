<script lang="ts" setup>
import BackToButton from '~/components/BackToButton.vue'
</script>

<template>
  <div class="page-root">
      <div class="page-container">
        <div class="pop">
          <div class="date">
              <p>2025.00.00</p>
          </div>
          <div class="news-title">
              <p>ニュース題名ニュース題名ニュース題名ニュース題名</p>
          </div>
        </div>
        <div class="detail">
          <p>ニュース内容ニュース内容ニュース内容ニュース内容ニュース内容ニュース内容ニュース内容ニュース内容ニュース内容</p>
        </div>
        <BackToButton
          text = "ニュース一覧に戻る"
          link = "/news"
        />
      </div>
  </div>
</template>


<style scoped lang="scss">
@use "@/assets/scss/_breakpoint.scss" as *;

.page-container {
  display: flex;
  flex-direction: column;
  padding-bottom: 10vh;
  margin: 10vh 10vw;
}

.pop {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  filter: drop-shadow(9px 19px 12px rgba(255, 255, 255, 0.4));
  background: linear-gradient(
  90deg,
  rgba(44,163,255,0.6) 0%, 
  rgba(113,255,210,0.6) 0%, 
  rgba(129,240,255,0.6) 17%, 
  rgba(58,215,181,0.6) 44%, 
  rgba(162,240,254,0.6) 67%, 
  rgba(157,255,209,0.6) 91%
  )
}

.date {
  font-size: 18px;
  padding: 0 2vw;
  margin: 0;
}

.news-title {
  display: flex;
  justify-content: center;
  margin: 0 5vw 5vh;
  padding: 0;
  @include md {
    margin: 0 5vw 3vh;
  }
}

.detail {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 12px; // 枠線として使う余白
  margin-top: 10vh;
  background: #fff;
  background: linear-gradient(
    90deg, 
    rgba(44,163,255,1) 0%, 
    rgba(113,255,210,1) 0%, 
    rgba(129,240,255,1) 17%, 
    rgba(58,215,181,1) 44%, 
    rgba(162,240,254,1) 67%, 
    rgba(157,255,209,1) 91%
  );
  background-size: 200% 200%;
  overflow: hidden;
  width: fit-content;
  filter: drop-shadow(5px 3px 10px rgba(255, 255, 255, 0.9));

  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 10px;
    background: #fff;
    z-index: 1;
  }

  p {
    position: relative;
    z-index: 2;
    margin: 0;
    padding: 25px 40px;
    font-size: 25px;
    color: #222;
    @include md {
      font-size: 20px;
      padding: 20px 30px;
    }
    @include sm {
      font-size: 18px;
      padding: 15px 15px;
    }
  }
}  
</style>