<script lang="ts" setup>
// const props = defineProps<{
//   eventData: {
//     id: number
//     e_name: string
//     // e_genre: Genre;
//     o_name: string
//     // area: Area;
//     // p_name: string;
//   }
// }>()
</script>
<template>
<div class="event-card">
  <div class="card-title">
    <p class="card-genre">Dance</p>
  </div>
  <div class="icon-holder">
    <img class="icon-image" src="~/assets/images/dummy-icon.webp" alt="event-icon"/>
  </div>
  <div class="card-contents">
    <p class="e-name">企画名</p>
    <p class="o-name">団体名</p>
    <p class="place">場所</p>
  </div>
</div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;
.event-card{
  width:30vw;
  height:25vw;
  background-image: url(~/assets/images/event-card.webp);
  backgroud-size: cover;
}
.card-title{
  color: #EDEBA9BF;
  font-size: 30px;
  padding-left: 7px;
}
.icon-holder{
  padding-left: 43px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>