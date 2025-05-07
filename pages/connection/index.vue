<script setup lang="ts">
import ConnectButton from "@/components/ConnectButton.vue";
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
          <div class="text-box">
            <div class="symbol">
              <p>■</p>
              <p>□</p>
            </div>
            <div class="content">
              <p>一橋大学　第28回KODAIRA祭</p>
              <p>開催日程<br />2025年 6/14(土) - 6/15(日)</p>
            </div>
          </div>
          <div class="button-box">
            <ConnectButton link="https://kodairafes.com/" />
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
  padding: 5% 10%;
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
  margin-top: 15vh;
  margin-bottom: 10vh;
  @include lg {
    flex-direction: column;
  }
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

.text-box {
  display: flex;
  //align-items: center;
  //font-size: 20px;
  @include md {
    font-size: 15px;
  }
}
.button-box {
  margin-top: 115px;
  margin-left: auto;
  margin-right: 0;
  @include lg {
    margin: 0 auto;
  }
}
// .connect-button {
//   //width: 3rem;
// }

p {
  @include md {
    font-size: 15px;
  }
}
</style>
