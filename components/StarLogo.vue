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
        <img src="~/assets/images/star-logo.webp" alt="moon" class="star-icon">
      </div>
      <div class="content">
        <p class="title">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.star{
  display: flex;
  flex-direction: row;
}
.content {
  display: flex;
  flex-direction: column-reverse;
  align-items: start;
  font-size: 32px;
  position: relative;
  top: 20px;
  left: 90px;
  @include md{
    font-size: 25px;
    left: 8svw
  }
}
</style>