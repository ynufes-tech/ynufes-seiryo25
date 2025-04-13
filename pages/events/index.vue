<script setup lang="ts">
import EventCard from "~/components/EventCard.vue";
</script>
<template>
  <div class="page-root">
    <PageTitle title="EVENTS" sub-title="企画一覧" />
    <div class="card-holder">
      <EventCard></EventCard>
    </div>

  </div>
</template>
<style>
.card-holder{
  width:90vw;
  padding-top: 40svh;
  padding-left: 5vw;
}
</style>