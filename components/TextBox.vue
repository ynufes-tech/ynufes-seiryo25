<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'medium', // small | medium | large
  },
})
</script>

<template>
    <div class="text-box" :class="`size-${size}`">
      <p>{{ text }}</p>
    </div>
</template>  

<style lang ="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

.text-box{
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 12px; // 枠線として使う余白
  margin: 5vh 1vw;
  background: #fff;
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
  overflow: hidden;
  width: 30vw;
  filter: drop-shadow(5px 3px 10px  rgba(255, 255, 255, 0.9));

  @media (max-width: 1000px) {
    width: fit-content;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 10px;
    background: #fff;
    z-index: 1;
  }

  p {
    white-space: pre-line;
    position: relative;
    z-index: 2;
    margin: 0;
    padding: 12px 14px;
    font-size: 22px;
    color: #222;
    @include md {
      font-size: 18px;
      padding: 12px 15px;
    }
    @include sm {
      font-size: 15px;
      padding: 15px 15px;
    }
  }
  &.size-small {
    width: 300px;
    @include md {
      width: 70vw;
    }
    @include sm {
      width: 70vw;
    }
    p {
      font-size: 18px;
      padding: 2vh 0;
    }
  }

  &.size-medium {
    width: 500px;
    @include md {
      width: 85vw;
    }
    @include sm {
      width: 75vw;
    }
  }

  &.size-large {
    width: 700px;
    @include md {
      width: 70vw;
    }
    @include sm {
      width: 75vw;
    }
  }
}  

</style>