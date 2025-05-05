<script setup lang="ts">
const props = defineProps<{
  rank: number;
  image?: string;
  votes?: number | string;
  projectName?: string;
  comingSoon?: boolean;
}>();

const rankClass = computed(() => {
  if (props.rank === 1) return "first";
  if (props.rank === 2) return "second";
  if (props.rank === 3) return "third";
  return "";
});
</script>

<template>
  <div class="ranking-card">
    <img
      v-if="props.rank === 1"
      src="/assets/images/big-star.webp"
      alt="一番星"
      class="big-star"
    />
    <div class="rank" :class="rankClass">第{{ props.rank }}位</div>
    <div class="image-area">
      <img src="/assets/images/comingsoon.webp" alt="企画写真" />
    </div>
    <div class="votes">{{ props.votes }}票</div>
    <div class="project-name">「{{ props.projectName }}」</div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.ranking-card {
  text-align: center;
  position: relative;
}

.big-star {
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  z-index: 2;
  @include md {
    top: -55px;
    width: 80px;
  }
}
.rank {
  color: #fff;
  -webkit-text-stroke: 0.2px #4dffde;
  text-shadow: 0px -1px 2px #4dffde;
  font-size: 24px;
  font-weight: bold;
}
.image-area img {
  width: 100%;
  width: 190px;
  height: auto;
}
.votes {
  margin-top: 8px;
  font-size: 20px;
}
.project-name {
  margin-top: 4px;
  font-size: 20px;
}
</style>
