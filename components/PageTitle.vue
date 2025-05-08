<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="page-title">
    <h1>{{ props.title }}</h1>
    <h2>{{ props.subTitle }}</h2>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-title {
  margin: 0 auto;
  position: absolute;
  top: 125px;
  left: 13%;
  white-space: nowrap;
  z-index: 1000;
  @include md {
    top: 100px;
    left: 7%;
  }
  @include sm {
    top: 90px;
    left: 3%;
  }
  > h1 {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: 0 3vw;
    font-size: 90px;
    letter-spacing: 0;
    width: fit-content;
    color: transparent;
    -webkit-text-stroke: 1px #21FCE3; 
    text-shadow: 10px 10px 35px #65FBC2;
    font-weight: 400;
    z-index: 1000;
    @include md {
      font-size: 60px;
    }
    @include sm {
      font-size: 45px;
    }
  }
  > h2 {
    margin: 0 5vw;
    font-size: 30px;
    color: #ffffff;
    position: absolute;
    top: 90%;
    width: fit-content;
    font-weight: 300;
    z-index: 1000;
    @include md {
      font-size: 18px;
      white-space: nowrap;
    }
    @include sm {
      font-size: 18px;
      white-space: nowrap;
    }
  }
}
</style>