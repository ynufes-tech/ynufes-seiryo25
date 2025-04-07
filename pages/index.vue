<script setup lang="ts">
useHead({
  title: 'Top | 25清陵祭公式HP~翠星~',
  meta: [
    {
      name: 'description',
      content: '5/17,18に開催される25清陵祭の公式HPです! 最新情報を随時更新していきます!',
    },
  ],
});
</script>

<template>
  <div class="page-root">
    <div class="shooting-stars">
      <div class="shooting-star-mini">
        <img class="shooting-star-mini-img" src="@/assets/images/shooting-star_mini.webp" />
      </div>
      <div class="shooting-star-big">
          <img class="shooting-star-big-img" src="@/assets/images/shooting-star_big.webp" />
      </div>
    </div>
    <div class="page-container">
      <div class="content">
        <div class="title-container">
          <img id="top-title" src="@/assets/images/title_suisei-image.webp" />
        </div>
        <div class="seiryo-logo">
          <img class="seiryo-logo-image" src="@/assets/images/seiryo-logo.webp" />
        </div>
        <div class="date">
          <p>5/17 <span class="weekday">Sat.</span>  13:00 - 20:30</p>
          <p>5/18 <span class="weekday">Sun.</span>  9:00 - 15:00</p>
        </div>
        <SNS />
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
@use '@/assets/scss/_breakpoint.scss' as *;

.page-root{
  padding: 0;
}

.page-container {
  position: relative;
  width: 100%;
  height: 115vh;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}

.content {
  position: absolute;
  top: 70vh;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.shooting-stars {
  position: absolute;
  width: 100vw;
  height: 100vh;
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

.shooting-star-mini img{
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

.shooting-star-big img{
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
  text-shadow: 0 0 10px #05E6FF, 0 0 10px #65FBC2;
  margin: 0;
  width: min(65vw, 28em);
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 1.5em;
  font-family: 'Cinzel', sans-serif;
  @include sm {
    margin-top: 35vw;
  }
}

.weekday{
  font-family: 'Amiri', sans-serif;
}

.preparing{
  display: flex;
  justify-content: center;
  margin: 30vh 0;
}

// .pre-message{
  // font-size: 40px;
  // color: #eee;
// }
</style>