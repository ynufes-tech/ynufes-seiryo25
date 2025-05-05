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
    <div class="star">
      <div class="moon-logo">
        <img
          src="~/assets/images/star-logo.webp"
          alt="moon"
          class="star-icon"
        >
      </div>
      <div class="content">
        <p class="title">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.star{
  display: flex;
  flex-direction: row;
  position: relative;
  right: 0;
  left: 20vw;
  bottom: 0;
}
.content {
  display: flex;
  flex-direction: column-reverse;
  align-items: start;
  font-size: 25px;
  position: relative;
  top: 0;
  left: auto;
  @include md{
    font-size: 22px;
  }
  @include sm{
    font-size: 18px;
  }
}

.star-icon {
  @include md {
    width: 5vw;
    height: auto;
  }
}
</style>
