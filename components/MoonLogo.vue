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
        <img src="~/assets/images/moon-logo.webp" alt="moon">
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
}
.content {
  display: flex;
  flex-direction: column-reverse;
  align-items: start;
  position: relative;
  top: -10px;
  font-size: 32px;
}
</style>