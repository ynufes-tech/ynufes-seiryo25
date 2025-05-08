<script setup lang="ts">


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
          :text="`全企画の中で最も来場者の皆さんを満足させるのはどの企画か...？\n
                  「展示・販売・体験部門」「食べ物部門」「パフォーマンス部門」\nの三つの部門に分かれて総得点を競う、企画審査委員会。今回も開催します！\n
                  皆さんは企画審査委員です。清陵祭を楽しんで、企画を星5つでフォームから評価しましょう。\n
                  参加してくれた審査委員の皆さんには、図書館前で景品も！\n
                  皆さんの審査投票をお待ちしています。`"
          size="large"
        />
        <div class="buttons">
          <!-- <TopButton title="企画団体一覧" />
                  <TopButton title="ランキングを見る" /> -->
        </div>
        <div class="howto">
          <img class="howto-img" src="/assets/images/contest-howto.webp"
          alt="Howto"/>
        </div>
        <div class="vote-link">
          <a href="https://forms.gle/K9Xr4En59uDg9PGm6" target="_blank" rel="noopener noreferrer">
            企画審査フォームはこちら
          </a>
          <img class="vote-qr" src="/assets/images/contest-qr.webp"
          alt="Howto"/>
        </div>
      </div>
      <div class="mid-box">
        <div class="title">
          <MoonLogo text="部門紹介" class="cate" />
        </div>
        <div class="categories">
          <StarLogo text="展示・販売・体験部門" class="star" />
          <TextBox
            :text="`創意工夫が光る企画が勢ぞろい。\n個性豊かで魅力あふれる展示や、多種多様な体験の面白さをその目でご評価ください。`"
            size="large"
            class="contents"
          />
          <StarLogo text="食べ物部門" class="star" />
          <TextBox
            :text="`個性光るさまざまな料理が皆さんを待っています。\n味はもちろん、見た目や提供の工夫まで、審査委員の皆さまの目と舌でご審査を！`"
            size="large"
            class="contents"
          />
          <StarLogo text="パフォーマンス部門" class="star" />
          <TextBox
            :text="`歌・ダンス・演劇など多彩なパフォーマンスが展開されます。\n演出力や表現力など、熱いパフォーマンスをその目で見極めてください。`"
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
  <!-- ✅ ここにフローティングボタンを追加 -->
  <div class="floating-buttons">
    <NuxtLink to="/ranking" class="floating-button" aria-label="ランキングページへ">
      <img src="/assets/images/ranking-button.webp" alt="ランキングボタン" />
    </NuxtLink>
    <NuxtLink to="/events" class="floating-button" aria-label="企画一覧ページへ">
      <img src="/assets/images/kikaku-button.webp" alt="企画一覧ボタン" />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.page-container {
  padding: 5rem 10vw;
  flex-direction: column;
  display: flex;
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

.vote-link {
  padding: 5rem 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  a {
    color: white;
  }
  .vote-qr {
    margin-top: 3rem;
    width: 20vw;
    @include md {
      width: 40vw;
    }
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
  width: 100%;
  margin-left: -55vw;
}

.contents {
  display: flex;
  align-items: center;
  @include md {
    margin-top: 1rem;
  }
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
/* ✅ フローティング全体の親コンテナ */
.floating-buttons {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column; // 縦並び
  gap: 12px; // ボタンの間隔
}

/* ✅ 個々のリンク（ボタン） */
.floating-button {
  display: block;
}

/* ✅ 画像サイズ（PCで1.7倍） */
.floating-button img {
  width: 165px;
  height: auto;
  transition: transform 0.2s ease;
  cursor: pointer;
}

/* ✅ ホバー時アニメーション */
.floating-button img:hover {
  transform: scale(1.05);
}

/* ✅ スマホ用サイズ制限 */
@include md {
  .floating-button img {
    width: 85px;
  }
}
</style>
