<script setup lang="ts">
import events from 'public/events.json'
import EventCard from "~/components/EventCard.vue";
const CustomOrder = [2, 1, 4, 3, 7, 6, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58];//企画は58個
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