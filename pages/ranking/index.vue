<script setup lang="ts">
import ColorBox from "~/components/ColorBox.vue";
import ColorButton from "~/components/ColorButton.vue";
import MoonLogo from "~/components/MoonLogo.vue";
import StarLogo from "~/components/StarLogo.vue";

useHead({
  title: "Ranking | 25清陵祭公式HP~翠星~",
  meta: [
    {
      name: "description",
      content: "企画コンテストのランキングを更新していきます！",
    },
  ],
});
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <PageTitle :title="'RANKING'" :sub-title="'企画ランキング'" />
      <div class="box">
        <div class="upper-button">
          <ColorButton
            date="5/17"
            text="中間結果発表"
            link="#day1-result"
            class="result-button"
          />
          <ColorButton
            date="5/18"
            text="最終結果発表"
            link="#day2-result"
            class="result-button"
          />
        </div>
        <div class="result-holder">
          <div id="day1-result">
            <div class="result-title">
              <img class="moon" src="/assets/images/moon-logo.webp" />
              <ColorBox text="5/17　中間結果発表" class="result-text" />
            </div>
            <div class="cate">
              <img
                class="star"
                src="/assets/images/star-logo.webp"
                alt="星LOGO"
              />
              <ColorBox text="展示・販売・体験部門" class="cate-text" />
            </div>
            <div class="ranking-holder">
              <RankingCard
                :rank="2"
                id=1
                votes="???"
                projectName="Coming soon..."
                class="rank2"
              />
              <RankingCard
                :rank="1"
                id=2
                votes="???"
                projectName="Coming soon..."
                class="rank1"
              />
              <RankingCard
                :rank="3"
                id=3
                votes="???"
                projectName="Coming soon..."
                class="rank3"
              />
            </div>
            <div class="cate">
              <img
                class="star"
                src="/assets/images/star-logo.webp"
                alt="星LOGO"
              />
              <ColorBox text="食べ物部門" class="cate-text" />
            </div>
            <div class="ranking-holder">
              <RankingCard
                :rank="2"
                id="2位の画像"
                votes="???"
                projectName="Coming soon..."
                class="rank2"
              />
              <RankingCard
                :rank="1"
                id="1位の画像"
                votes="???"
                projectName="Coming soon..."
                class="rank1"
              />
              <RankingCard
                :rank="3"
                id="3位の画像"
                votes="???"
                projectName="Coming soon..."
                class="rank3"
              />
            </div>
            <div class="cate">
              <img
                class="star"
                src="/assets/images/star-logo.webp"
                alt="星LOGO"
              />
              <ColorBox text="パフォーマンス部門" class="cate-text" />
            </div>
            <div class="ranking-holder">
              <RankingCard
                :rank="2"
                id="2位の画像"
                votes="???"
                projectName="Coming soon..."
                class="rank2"
              />
              <RankingCard
                :rank="1"
                id="1位の画像"
                votes="???"
                projectName="Coming soon..."
                class="rank1"
              />
              <RankingCard
                :rank="3"
                id="3位の画像"
                votes="???"
                projectName="Coming soon..."
                class="rank3"
              />
            </div>
          </div>
          <div id="day2-result">
            <div class="result-title">
              <img
                class="moon"
                src="/assets/images/moon-logo.webp"
                alt="月LOGO"
              />
              <ColorBox text="5/18　最終結果発表" class="result-text" />
            </div>
            <div class="cate">
              <img
                class="star"
                src="/assets/images/star-logo.webp"
                alt="星LOGO"
              />
              <ColorBox text="展示・販売・体験部門" class="cate-text" />
            </div>
            <div class="ranking-holder">
              <RankingCard
                :rank="2"
                id="2位の画像"
                votes="???"
                projectName="Coming soon..."
                class="rank2"
              />
              <RankingCard
                :rank="1"
                id="1位の画像"
                votes="???"
                projectName="Coming soon..."
                class="rank1"
              />
              <RankingCard
                :rank="3"
                id="3位の画像"
                votes="???"
                projectName="Coming soon..."
                class="rank3"
              />
            </div>
            <div class="cate">
              <img
                class="star"
                src="/assets/images/star-logo.webp"
                alt="星LOGO"
              />
              <ColorBox text="食べ物部門" class="cate-text" />
            </div>
            <div class="ranking-holder">
              <RankingCard
                :rank="2"
                id="2位の画像"
                votes="???"
                projectName="Coming soon..."
                class="rank2"
              />
              <RankingCard
                :rank="1"
                id="1位の画像"
                votes="???"
                projectName="Coming soon..."
                class="rank1"
              />
              <RankingCard
                :rank="3"
                id="3位の画像"
                votes="???"
                projectName="Coming soon..."
                class="rank3"
              />
            </div>
            <div class="cate">
              <img
                class="star"
                src="/assets/images/star-logo.webp"
                alt="星LOGO"
              />
              <ColorBox text="パフォーマンス部門" class="cate-text" />
            </div>
            <div class="ranking-holder">
              <RankingCard
                :rank="2"
                id="2位の画像"
                votes="???"
                projectName="Coming soon..."
                class="rank2"
              />
              <RankingCard
                :rank="1"
                id="1位の画像"
                votes="???"
                projectName="Coming soon..."
                class="rank1"
              />
              <RankingCard
                :rank="3"
                id="3位の画像"
                votes="???"
                projectName="Coming soon..."
                class="rank3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-weight: 500;
  padding: 0 10vw 10vh;
}

.box {
  margin-top: 40vh;
  @include md {
    margin-top: 30vh;
  }
  @include sm {
    margin-top: 20vh;
  }
}

.upper-button {
  display: flex;
  gap: 10vw;
  @include sm {
    flex-direction: column;
  }
}

::v-deep(.color-button .now) {
  font-size: 23px;
  text-align: center;
  padding: 1vh 0 0;
  @include md {
    padding: 1vh 0 0;
    font-size: 16px;
  }
  @include sm {
    padding: 1vh 0 0;
  }
}

::v-deep(.color-button .news-title) {
  font-size: 23px;
  padding: 1vh 10vw 1vh;
  white-space: nowrap;
  @include md {
    padding: 1vh 5vw 1vh;
    font-size: 16px;
  }
  @include sm {
    padding: 1vh 10vw 1vh;
  }
}

.result-button {
  border-radius: 10rem;
}

.moon {
  width: 180px;
  height: auto;
  margin-top: -10vh;
  margin-left: -3.5vw;
  @include md {
    max-width: 15vw;
  }
  @include sm {
    width: 12vw;
  }
}

.result-title {
  display: flex;
  margin-top: 20vh;
  @include md {
    flex-direction: column;
    margin-top: 15vh;
  }
}

::v-deep(.color-box) {
  border-radius: 20px !important;
  overflow: hidden;
}

.result-text {
  max-width: 500px;
  height: 8vh;
  border-radius: 1rem;
  white-space: nowrap;
  @include md {
    width: 50vw;
    height: 7vh;
  }
}

.star {
  width: 60px;
  margin: -15vh 5vw 0 3vw;
  @include md {
    width: 40px;
  }
  @include md {
    width: 30px;
  }
}

.cate {
  display: flex;
  margin-top: 15vh;
  @include md {
    flex-direction: column;
  }
}

.cate-text {
  max-width: 30vw;
  height: 7vh;
  white-space: nowrap;
  min-width: 15em;
  @include md {
    width: 30vw;
  }
}

.ranking-holder {
  display: flex;
  justify-content: space-around;
  margin-top: 10vh;
  @include md {
    display: flex;
    flex-direction: column;
  }
}

.rank2 {
  margin-top: 10vh;
  @include md {
    margin-top: 10vh;
    order: 2;
  }
}

.rank3 {
  margin-top: 20vh;
  @include md {
    margin-top: 10vh;
    order: 3;
  }
}
</style>
