<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="pop">
    <NuxtLink class="color-button" :to="link">
      <div class="content">
        <p class="now">{{ date }}</p>
        <p class="news-title">{{ text }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.pop {
  display: flex;
  justify-content: center;
}

.color-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  padding: 2px; // 枠線として使う余白
  background: linear-gradient(
    90deg, 
    rgba(44,163,255,1) 0%, 
    rgba(113,255,210,1) 0%, 
    rgba(129,240,255,1) 17%, 
    rgba(58,215,181,1) 44%, 
    rgba(162,240,254,1) 67%, 
    rgba(157,255,209,1) 91%
  );
  background-size: 200% 200%;
  transition: all 0.4s ease;
  text-decoration: none;
  overflow: hidden;
  width: fit-content;
  filter: drop-shadow(5px 3px 10px rgba(255, 255, 255, 0.9));

  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: inherit;
    background: #fff;
    transition: all 0.4s ease;
    z-index: 1;
  }

  p {
    position: relative;
    z-index: 2;
    margin: 0;
    padding: 25px 60px;
    font-size: 25px;
    color: #222;
    transition: color 0.4s ease;

    @include md {
      padding: 18px 13px;
      font-size: 20px;
    }
    @include sm {
      padding: 15px 9px;
      font-size: 18px;
    }
  }

  &:hover {
    background: transparent; // 背景（グラデ）を消す
    background-position: 100% 100%;

    &::before {
      background: linear-gradient(
        90deg,
        rgba(44, 163, 255, 0.2) 0%,
        rgba(129, 240, 255, 0.2) 17%,
        rgba(58, 215, 181, 0.2) 44%,
        rgba(162, 240, 254, 0.2) 67%,
        rgba(157, 255, 209, 0.2) 91%
      );
      border: 1px solid transparent; // 枠線削除の見せかけ
    }

    p {
      color: #fff;
    }
  }
  
  .now {
    margin-top: 0;
    padding: 0 1vw 0;
    font-size: 15px;
  }

}
</style>