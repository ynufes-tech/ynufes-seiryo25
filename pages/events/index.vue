<script setup lang="ts">
import events from 'public/events.json'
import EventCard from "~/components/EventCard.vue";
</script>
<template>
  <div class="page-root">
    <PageTitle title="EVENTS" sub-title="企画一覧" />
    <div class="card-holder">
      <NuxtLink
          v-for="event in events"
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
}

.events-elements{
  text-decoration: none;
}
</style>