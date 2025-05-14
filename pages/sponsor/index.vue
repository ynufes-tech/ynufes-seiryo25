<script setup lang="ts">
import moonLogo from "@/assets/images/moon-logo.webp"; // 正しいパスに修正
useHead({
  title: "Sponsor | 25清陵祭公式HP~翠星~",
  meta: [{ name: "description", content: "25清陵祭のご協賛企業一覧を掲載しています。" }],
});
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <PageTitle :title="'SPONSOR'" :sub-title="'ご協賛企業一覧'" />
      <div class="box">
        <div class="explanation">
          <p>
            「25清陵祭」の開催にあたり、多くの企業の皆様より多大なるご支援とご協力を賜りました。<br />
            ここに深く感謝申し上げます。
          </p>
          <p>
            ご協賛いただいた企業の皆様を以下にご紹介いたします。<br />
            （敬称略・五十音順）
          </p>
        </div>

        <div class="heading">
          <img :src="moonLogo" alt="装飾アイコン" class="decor-icon" />
          <h2>広告協賛</h2>
        </div>
        <div class="sponsor">
          <div class="left">
            ・JOINUS<br />
            ・オーラルプラン歯科クリニック<br />
            ・株式会社安藤スポーツ<br />
            ・株式会社カレッジヤード<br />
            ・株式会社毎日コムネット<br />
            ・株式会社 横浜岡田屋<br />
            ・株式会社らいふ<br />
            ・株式会社ロフトシステムズ
          </div>
          <div class="right">
            ・食品館あおば<br />
            ・ときた内科クリニック<br />
            ・どんとこい家<br />
            ・ネクストギアーズ株式会社<br />
            ・羽沢くぼた眼科<br />
            ・ユニゾン英語学院<br />
            ・横浜国立大学生活協同組合<br />
          </div>
        </div>
        <div class="heading">
          <img :src="moonLogo" alt="装飾アイコン" class="decor-icon" />
          <h2>物品協賛</h2>
        </div>
        <div class="sponsor">
          <div class="left">
            ・HARIO株式会社<br />
            ・TAC株式会社<br />
            ・ZONe<br />
            ・伊豆シャボテン動物公園グループ<br />
            ・株式会社COMP<br />
            ・株式会社ウエニ貿易<br />
            ・株式会社グリーティングライフ<br />
            ・株式会社サンデーペイント<br />
            ・株式会社サンナホル<br />
            ・株式会社デルタインターナショナル<br />
            ・株式会社ビューティーネイラー<br />
            ・柳家本店
          </div>
          <div class="right">
            ・パセラリゾーツ(株式会社ニュートン)<br />
            ・株式会社ねぎしフードサービス<br />
            ・株式会社ミツヱ<br />
            ・鴨居自動車学校<br />
            ・鎌倉まめや<br />
            ・記念艦「三笠」<br />
            ・公益財団法人 戸栗美術館<br />
            ・コヤマドライビングスクール横浜<br />
            ・日本製紙クレシア株式会社<br />
            ・伯方塩業株式会社<br />
            ・横須賀美術館<br />
            ・横浜ベイシェラトン ホテル＆タワーズ
          </div>
        </div>
        <div class="heading">
          <img :src="moonLogo" alt="装飾アイコン" class="decor-icon" />
          <h2>ブース協賛</h2>
        </div>
        <div class="sponsor">
          <div class="left">・株式会社アットヨコハマ</div>
          <div class="right">・株式会社ミニミニ 神奈川横浜西口店</div>
        </div>
        <div class="heading">
          <img :src="moonLogo" alt="装飾アイコン" class="decor-icon" />
          <h2>寄付</h2>
        </div>
        <div class="sponsor">
          <div class="left">
            ・有限会社現代不動産<br />
            ・横浜銀行 和田町支店<br />
          </div>
          <div class="right">
            ・経済・経営学部、社会科学系大学院 同窓会 富丘会<br />
            ・常盤台地区連合町内会
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-container {
  flex-direction: column;
  display: flex;
  @include sm {
    margin-bottom: 5vh;
  }
}
.box {
  background-color: rgba(134, 249, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0 30px 15px rgba(134, 249, 255, 0.2);
  padding: 9% 8%;
  opacity: 90%;
  margin: 12rem 8vw 10vh;
  @include md {
    margin: 8rem 8vw 7vh;
  }
  @include sm {
    margin: 8rem 7vw 7vh;
  }
}

.explanation {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4vh;
  margin-bottom: 17vh;
  @include md {
    margin-bottom: 6vh;
  }
}

.sponsor {
  margin-top: 10vh;
  display: flex;
  gap: 2rem;

  @include md {
    margin-top: 8vh;
    flex-direction: column;
    gap: 0 2rem;
  }

  .left,
  .right {
    flex: 1;
  }
}

p {
  font-size: 24px;
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 13px;
  }
}

.heading {
  display: flex;
  align-items: center;
  margin-top: 5rem;

  h2 {
    font-weight: lighter;
  }

  @include sm {
    h2 {
      font-size: 26px;
    }
  }
  .decor-icon {
    width: 6em;
    height: auto;
    margin-right: 0.5em;
    @media (max-width: 768px) {
      width: 4em;
      margin-right: 0.3em;
    }
    @media (max-width: 480px) {
      width: 3em;
      margin-right: 0.2em;
    }
  }
}
</style>
