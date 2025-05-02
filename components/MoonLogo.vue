<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="pop">
    <div class="moon">
      <div class="moon-logo">
        <img src="~/assets/images/moon-logo.webp" alt="moon" class="moon-icon">
      </div>
      <div class="content">
        <p class="title">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.moon{
  display: flex;
  flex-direction: row;
  position: relative;
  right: 0;
  left: 15vw;
  bottom: 20px;
}
.content {
  display: flex;
  flex-direction: column-reverse;
  align-items: start;
  position: relative;
  top: -10px;
  font-size: 25px;
  @include md{
    font-size: 22px;
  }
  @include sm{
    font-size: 18px;
  }
}
.moon-icon{
  width: 10vw; 
  max-width: 80px;
  height: auto;
  @include md{
    width: 18vw;
    max-width: 100px;
  }
}
</style>