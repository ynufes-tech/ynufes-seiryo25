<script lang="ts" setup></script>
<template>
  <div class="banner-component">
    <div class="eye-ceiver">
      <a
        href="https://www.hazawa-kubotaganka.com/"
        class="banner"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="~/assets/images/eye-clinic.webp"
          class="banner-image"
          alt="sponsor-link"
        >
      </a>
      <a
        href="https://www.next-gears.net/"
        class="banner"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="~/assets/images/transceiver.webp"
          class="banner-image"
          alt="sponsor-link"
        >
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import 'assets/scss/_breakpoint.scss';

.banner-component {
  display: flex;
  justify-content: center;
  @include md {
    display: flex;
    flex-direction: column;
  }
}
.eye-ceiver {
  display: flex;
  flex-direction: row;

  @include md {
    flex-direction: column;
    align-items: center;
  }
}

.banner {
  margin: 0.5vw;
  width: 25vw;
  display: flex;
  align-items: center;
  @include md {
    width: 60vw;
    margin: 1vw;
  }
}

.banner-image {
  width: 100%;
  height: auto;
}
</style>