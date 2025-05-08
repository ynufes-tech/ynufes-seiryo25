<script setup lang="ts">
import moonLogo from '@/assets/images/moon-logo.webp' // 正しいパスに修正
useHead({
   title: "Sponsor | 25清陵祭公式HP~翠星~",
   meta:[
    { name: "description", content: "ご協賛はこちら"},
   ], 
});

</script>

<template>
  <div class="page-root">
       <div class="page-container">
           <PageTitle :title="'SPONSOR'" :sub-title="'協賛企業一覧'" />
           <div class="box">
               <div class="explanation">
                   <p>「25清陵祭」の開催にあたり、多くの企業の皆様より多大なるご支援とご協力を賜りました。<br/>
                     ここに深く感謝申し上げます。</p>
                 <p>ご協賛いただきました企業の皆様を以下にご紹介させていただきます。<br/>
                   （敬称略・五十音順）</p>
               </div>

  <h2 class="heading">
    <img :src="moonLogo" alt="装飾アイコン" class="decor-icon" />
    広告協賛
  </h2>
  <div class="sponsor">
    <div class="left">
      ・JOINUS<br/>
      ・オーラルプラン歯科クリニック<br/>
      ・株式会社安藤スポーツ<br/>
      ・株式会社カレッジヤード<br/>
      ・株式会社毎日コムネット<br/>
      ・株式会社 横浜岡田屋<br/>
      ・株式会社らいふ<br/>
      ・株式会社ロフトシステムズ

    </div>
    <div class="right">
      ・食品館あおば<br/>
      ・ときた内科クリニック<br/>
      ・どんとこい家<br/>
      ・ネクストギアーズ株式会社<br/>
      ・羽沢くぼた眼科<br/>
      ・ユニゾン英語学院<br/>
      ・横浜国立大学生活協同組合<br/>
    </div>
   
  </div>
  <h2 class="heading">
    <img :src="moonLogo" alt="装飾アイコン" class="decor-icon" />
    物品協賛
  </h2>
  <div class="sponsor">
    <div class="left">
・HARIO株式会社<br/>
・TAC株式会社<br/>
・ZONe<br/>
・伊豆シャボテン動物公園グループ<br/>
・株式会社COMP<br/>
・株式会社ウエニ貿易<br/>
・株式会社グリーティングライフ<br/>
・株式会社サンデーペイント<br/>
・株式会社サンナホル<br/>
・株式会社デルタインターナショナル<br/>
・株式会社ビューティーネイラー<br/>

    </div>
    <div class="right">
      ・株式会社ニュートン<br/>
      ・株式会社ねぎしフードサービス<br/>
      ・株式会社ミツヱ<br/>
      ・鴨居自動車学校<br/>
      ・鎌倉まめや<br/>
      ・記念艦「三笠」<br/>
      ・公益財団法人 戸栗美術館<br/>
      ・コヤマドライビングスクール横浜<br/>
      ・日本製紙クレシア株式会社<br/>
      ・伯方塩業株式会社<br/>
      ・横須賀美術館<br/>
      ・横浜ベイシェラトン ホテル＆タワーズ
    </div>
    </div>
    <h2 class="heading">
    <img :src="moonLogo" alt="装飾アイコン" class="decor-icon" />
    ブース協賛
  </h2>
  <div class="sponsor">
    <div class="left">
      ・株式会社アットヨコハマ

    </div>
    <div class="right">
      ・株式会社ミニミニ 神奈川横浜西口店
    </div>
   
  </div>
  <h2 class="heading">
    <img :src="moonLogo" alt="装飾アイコン" class="decor-icon" />
    寄付
  </h2>
  <div class="sponsor">
    <div class="left">
      ・有限会社現代不動産<br/>
      ・横浜銀行 和田町支店<br/>

    </div>
    <div class="right">
      ・経済・経営学部、社会科学系大学院 同窓会 富丘会<br/>
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
    @include md {
      margin-top: 8vh;
    }
  display: flex;
  gap: 2rem;

  @include md {
    margin-top: 8vh;
    flex-direction: column;
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

.heading{
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: bold;

  .decor-icon {
    width: 8em;
    height: auto;
    margin-right: 0.5em;
    @media (max-width: 768px) {
      width: 5em;
      margin-right: 0.3em;
    }
    @media (max-width: 480px) {
      width: 4em;
      margin-right: 0.2em;
    }
  }
}
</style>