<script setup lang="ts">
import TopButton from "~/components/TopButton.vue";

useHead({
  title: "Contest | 25清陵祭公式HP~翠星~",
  meta: [
    {
      name: "description",
      content: "企画コンテストの詳細と結果をお知らせします！",
    },
  ],
});
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <PageTitle :title="'CONTEST'" :sub-title="'企画コンテスト'" />
      <div class="upper-box">
        <TextBox
          :text="`企画コンテストの紹介文企画コンテストの紹介文企画コンテストの紹介文企画コンテストの紹介文企画コンテストの紹介文企画コンテストの紹介文企画コンテストの紹介文企画コンテストの紹介文企画コンテストの紹介文企画コンテストの紹介文企画コンテストの紹介文企画コンテストの紹介文企画コンテストの`"
          size="large"
        />
        <div class="buttons">
          <!-- <TopButton title="企画団体一覧" />
                  <TopButton title="ランキングを見る" /> -->
        </div>
        <div class="howto">
          <img class="howto-img" src="/assets/images/no-image.png" />
        </div>
      </div>
      <div class="mid-box">
        <div class="title">
          <MoonLogo text="部門紹介" class="cate" />
        </div>
        <div class="categories">
          <StarLogo text="○○部門" class="star" />
          <TextBox
            :text="`部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明`"
            size="large"
            class="contents"
          />
          <StarLogo text="○○部門" class="star" />
          <TextBox
            :text="`部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明`"
            size="large"
            class="contents"
          />
          <StarLogo text="○○部門" class="star" />
          <TextBox
            :text="`部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明部門の説明`"
            size="large"
            class="contents"
          />
        </div>
      </div>
      <div class="under-box">
        <div class="title">
          <MoonLogo text="2024常盤祭の優勝団体" class="cate" />
        </div>
        <div class="past-winner">
          <TextBox :text="`飲食部門\n和田町ジロリアン`" size="small" />
          <TextBox
            :text="`展示・販売・体験部門\n謎解きサークルWHYNU`"
            size="small"
          />
          <TextBox
            :text="`パフォーマンス部門\nお笑いサークルわかば`"
            size="small"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.page-container {
  padding: 5rem 10vw;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @include sm {
    margin-bottom: 5vh;
  }
}

.upper-box {
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include md {
    margin-top: 6vh;
  }
  @include sm {
    margin-top: 3vh;
  }
}

.howto {
  display: flex;
  justify-content: center;
}

.howto-img {
  width: 550px;
  height: 700px;

  @include md {
    width: 350px;
    height: 500px;
  }
  @include md {
    width: 300px;
    height: 400px;
  }
}

.buttons {
  position: absolute;
  margin: 19rem 0 0 -50vw;
}

.mid-box {
  margin-top: 20vh;
}

.title {
  display: flex;
  width: 100%;
}

.cate {
  width: 100%;
  display: flex;
  padding-right: 6vw;
  @include md {
    padding-right: 12vw;
  }
}

.categories {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.star {
  display: flex;
  margin-left: -120vw;
}

.contents {
  display: flex;
  align-items: center;
}

.under-box {
  margin-top: 10vh;
}

.past-winner {
  display: flex;
  justify-content: space-between;
  @include md {
    flex-direction: column;
    align-items: center;
  }
}
</style>
