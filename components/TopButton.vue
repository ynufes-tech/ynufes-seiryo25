<script lang="ts" setup>
import { NuxtLink } from '#components';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  pageLink: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: '650px', 
  },
})
</script>

<template>
  <NuxtLink :to="pageLink">
    <button class="top-button" :style="{ width: width }">
      {{ title }}
    </button>
  </NuxtLink>
</template>

<style lang ="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

.top-button {
  display: flex;
  align-items: center;
  padding-left: 6vw;
  width: 650px;
  height: 120px;
  background-image: url('/assets/images/horizontal-button.webp');
  background-size: cover;
  background-position: center;
  border: none;
  color: #170634;
  font-size: 23px;
  font-family: 'Zen Old Mincho';
  cursor: pointer;
}

.top-button:hover {
  opacity: 0.8;
}

a {
  text-decoration: none;
}
</style>