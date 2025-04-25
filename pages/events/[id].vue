<script setup lang="ts">
const route = useRoute()
import events from '~/public/events.json' // イベントデータ
import StarLogo from '~/components/StarLogo.vue'
import MoonLogo from '~/components/MoonLogo.vue'
import ColorBox from '~/components/ColorBox.vue'
import SnsIconX from "~/components/SnsIconX.vue";
import SnsIconIns from "~/components/SnsIconIns.vue";

const id = parseInt(route.params.id)
const event = events.find((e) => e.id === id)
const showNoImage = function (e: SyntheticEvent<HTMLDivElement>) {
  e.target.src = './public/images/dummy-icon.webp'
  e.target.onerror = null
}
</script>

<template>
  <div class="page-root">
    <PageTitle title="EVENT" sub-title=""/>
      <div class="event-top">
        <div class="e-name">
          <div class="event-title">
            <p>{{ event?.e_name || '企画が見つかりません' }}</p>
          </div>
          <div class="event-content">
            <p class="place">{{ event?.place || '企画場所が見つかりません' }}</p>
          </div>
        </div>
      </div>
      <div class="icon-holder">
        <img
            :src="`https://storage.googleapis.com/seiryo25-assets/icons/${id}.webp`"
            alt="project-icon"
            class="icon"
            @error="showNoImage"
        />
      </div>
      <MoonLogo text="企業団体名" class="moon"/>
      <ColorBox :text="`${event?.o_name || '企画団体が見つかりません'}`"/>
      <StarLogo text="場所" class="star"/>
      <ColorBox :text="`${event?.place || '企画場所が見つかりません' }`"/>
      <StarLogo text="企画説明" class="star"/>
      <ColorBox :text="`${event?.e_description || '企画が見つかりません' }`"/>
      <StarLogo text="企画団体説明" class="star"/>
      <ColorBox :text="`${event?.o_description || '企画団体が見つかりません'}`"/>
    <div class="sns-holder">
      <div class="sns-icon">
        <SnsIconX v-if="event?.x_id" :link="event.x_id" />
        <SnsIconIns v-if="event?.ins_id" :link="event.ins_id"/>
      </div>
      <a class="homepage-link" v-if="event?.hp_id" :href="event?.hp_id ">
        <p>ホームページ</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.page-root {
  padding-bottom: 10vh;
}

.event-top {
  display: flex;
  justify-content: center;
}
.sns-holder{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.e-name {
  background-image: url(~/assets/images/event-name.webp);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 20vh;
  margin-top: 30vh;
  width: 60vw;
  border-radius: 2rem;
  @include md {
    width: 90%;
    height: auto;
    padding: 1rem;
    margin: 20vh 2rem 0;
  }
}

.icon-holder {
  display: flex;
  justify-content: center;
}

.icon {
  width: 40vw;
  margin-top: 5vh;
  @include md {
    width: 80%;
  }
}

.event-title {
  display: flex;
  justify-content: center;
  height: fit-content;

  p {
    font-size: 33px;
    margin: 0;
    @include md {
    font-size: 23px;
    text-align: center;
    }
    @include sm {
    font-size: 20px;
    }
  }
}

.event-content {
  display: flex;
  flex-direction: row;
  justify-content: center;

  p {
    margin: 0;
  }
}

.moon {
  position: relative;
  top: 30px;
  left: -20vw;
  @include md {
    left: -30vw;
  }
}

.star {
  position: relative;
  left: 0;
  margin-top: 20px;
  @include md {
    left: 0;
  }
}

.sns-icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10vh;
  gap: 5rem;
  @include md {
    flex-wrap: wrap;
  }
}
.homepage-link{
  background-color: rgba(0,0,0,0.3);
  width: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10svh;
  p{
    color: #ffffff;
    text-decoration: underline;
    text-decoration-color: #fff;
  }
}
</style>