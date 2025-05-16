<script setup lang="ts">
import events from 'public/events.json'
import EventCard from "~/components/EventCard.vue";
const CustomOrder = [30,20,7,15,17,3,24,19,18,36,43,42,46,50,26,52,39,27,1,5,9,21,22,35,32,33,59,55,57,47,28,40,60,12,44,49,37,45,8,10,14,16,48,25,23,38,31,54,4,6,53,2,29,41,51,34,11,13];//企画は58個
const ordered_events = CustomOrder.map(i => events[i-1])
</script>
<template>
  <div class="page-root">
    <PageTitle title="EVENTS" sub-title="企画一覧" />
    <div class="card-holder">
      <NuxtLink
          v-for="event in ordered_events"
          :key="event.id"
          :to="`/events/${event.id}`"
          class="events-elements"
      >
        <EventCard :event-data="event"/>
      </NuxtLink>
    </div>

  </div>
</template>
<style>
.card-holder{
  width:90vw;
  padding-top: 40svh;
  padding-left: 5vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.events-elements{
  text-decoration: none;
}
</style>