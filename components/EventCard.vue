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
    genre: string;
  }
}>()
const iconURL = `https://storage.googleapis.com/seiryo25-assets/icons/${props.eventData.id}.webp`
</script>
<template>
<div class="event-card">
  <div class="card-title">
    <p class="card-genre">{{props.eventData.genre}}</p>
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
  @include xl{
    width: 45svw;
    height: auto;
  }
  @include lg{
    width: 45svw;
    height: auto;
  }
  @include md{
    width: 45svw;
    height: auto;
    max-height: 256px;
    min-height: 160px;
  }
  @include sm{
    width: 90svw;
    height: auto;
  }
}
.card-title{
  font-size: 38px;
  padding-left: 15px;
  margin-top: 6px;
  position: relative;
  margin-bottom: 10px;
  color: rgba(237, 235, 169, 0.75);
  @include md{
    font-size: 20px;
    position: relative;
    top: 3px;
  }
  @include sm{
    font-size: 30px;
  }
}
.icon-holder{
  padding: 2% 23%;
  position: relative;
  top: -50px;
  text-align: center;
  @include lg{
    position: relative;
    top: -40px;
    right: 20px;
  }
  @include md{
    position: relative;
    top: -15px;
  }
  @include sm{
    position: relative;
    top: -30px;
    right: 20px;

  }
}
.icon-image{
  width: 15svw;
  height: auto;
  max-height: 12svw;
  min-height: 12svw;
  @include xl{
    width: 160px;
    height: auto;
    max-height: 150px;
    min-height: 150px;
  }
  @include lg{
    width: 140px;
    height: auto;
    max-height: 140px;
    min-height: 140px;
  }
  @include md {
    width: 110px;
    height: 90px;
    max-height: 90px;
    min-height: 90px;
  }
  @include sm{
    width: 150px;
    height: 120px;
    max-height: 120px;
    min-height: 120px;
  }
}
.card-contents{
  position: relative;
  top: -5svw;
  line-height: 1svh;
  padding-left: 5%;
  color: #170634;
  font-size: 1.5svw;
  @include xl{
    font-size: 2.5svw;
    top: -50px;
  }
  @include lg{
    font-size: 2.5svw;
    line-height: 5px;
    top: -60px;
  }
  @include md {
    font-size: 2.8svw;
    line-height: 5px;
    top: -35px;
  }
  @include sm{
    top: -50px;
    line-height: 3px;
    font-size: 4.8svw;

  }
}

</style>