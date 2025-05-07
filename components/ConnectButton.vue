<script lang="ts" setup>
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <a class="connect-button" href="link">
    <img
      class="image"
      src="@/assets/images/connect-button-img.webp"
      alt="他大学の学祭情報はこちら"
    />
  </a>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.connect-button {
  transition: 0.3s ease;
  .image {
    width: 270px;
    height: auto;
    @include md {
      width: 150px;
    }
  }

  &:hover {
    content: url("@/assets/images/connect-button-img-hover.webp");
    width: 270px;
    transition: 0.3s ease;
    @include md {
      width: 150px;
    }
  }
}
</style>
