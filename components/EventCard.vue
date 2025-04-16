<script lang="ts" setup>
const props = defineProps<{
  eventData: {
    id: number
    e_name: string
    // e_genre: Genre;
    o_name: string
    // area: Area;
    // p_name: string;
    place: string
  }
}>()
const iconURL = `https://storage.googleapis.com/seiryo25-assets/icons/${props.eventData.id}.webp`
</script>
<template>
<div class="event-card">
  <div class="card-title">
    <p class="card-genre">Dance</p>
  </div>
  <div class="icon-holder">
    <img
      :src="iconURL"
      alt="project-icon"
      class="icon-image"
    />
  </div>
  <div class="card-contents">
    <p class="e-name">{{ props.eventData.e_name}}</p>
    <p class="o-name">{{ props.eventData.o_name}}</p>
    <p class="place">{{ props.eventData.place}}</p>
  </div>
</div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;
.event-card{
  width:30vw;
  height:25vw;
  background-image: url(~/assets/images/event-card.webp);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.card-title{
  color: transparent;
  font-size: 50px;
  padding-left: 15px;
  margin-top: 5px;
  position: relative;
  top: -10px;
}
.icon-holder{
  padding: 0 23%;
  position: relative;
  top: -60px
}
.icon-image{
  width: 220px;
  height: auto;
}
.card-contents{
  position: relative;
  top: -80px;
  line-height: 15px;
  padding-left: 20%;
  color: #170634
}
.e-name{
  font-size: 30px;
}
</style>