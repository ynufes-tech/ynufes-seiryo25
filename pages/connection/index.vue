<script setup lang="ts">
useHead({
  title: "Connection | 25清陵祭公式HP~翠星~",
  meta: [{ name: "description", content: "他大学の大学祭情報はこちら" }],
});
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <PageTitle :title="'CONNECTION'" :sub-title="'他大学の学祭のご紹介'" />
      <div class="box">
        <div class="category">
          <div class="symbol">
            <p>■</p>
            <p>□</p>
          </div>
          <div class="content">
            <p>静岡大学　春フェス</p>
            <p>開催日程<br />2025年　4/26(土) - 4/27(日)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.page-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-weight: 500;
  padding-bottom: 10vh;
}

.box {
  background-color: rgba(134, 249, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0 30px 15px rgba(134, 249, 255, 0.2);
  padding: 5% 12%;
  opacity: 90%;
  margin: 12rem 8vw 0;
  @include md {
    margin-top: 18rem;
    padding: 2% 8%;
    margin: 8rem 7vw 0;
  }
  @include sm {
    margin-top: 7rem;
  }
}

.category {
  display: flex;
  margin-top: 10vh;
  margin-bottom: 10vh;
}

.symbol {
  display: flex;
  flex-direction: column;
  //font-family: "Amiri", sans-serif;
}

.content {
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
}

.linkto {
  color: #fff;
}

p {
  @include md {
    font-size: 15px;
  }
}
</style>
