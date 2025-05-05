<script setup lang="ts">
useHead({
  title: "FAQ | 25清陵祭公式HP~翠星~",
  meta: [
    { name: "description", content: "よくあるご質問はこちら" },
  ],
});
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <PageTitle :title="'FAQ'" :sub-title="'よくあるご質問'" />
      <div class="box">
        <div class="category">
          <div class="qa">
            <p>Q1</p>
            <p>A1</p>
          </div>
          <div class="content">
            <p>落とし物や迷子の相談は?</p>
            <p>
              お近くのSTAFFジャンパーを着ている大学祭実行委員にお声がけいただくか､本部(経営学部1号館108教室)までお越しください。
              場所はキャンパスマップをご参照ください。
            </p>
          </div>
        </div>
        <div class="category">
          <div class="qa">
            <p>Q2</p>
            <p>A2</p>
          </div>
          <div class="content">
            <p>具合が悪くなったら?</p>
            <p>
              お近くの大学祭実行委員にお声がけいただくか、本部までお越しください。
              混乱を避けるため、救急車の手配は大学実行委員が行います。
            </p>
          </div>
        </div>
        <div class="category">
          <div class="qa">
            <p>Q3</p>
            <p>A3</p>
          </div>
          <div class="content">
            <p>清陵祭期間中、 生協や食堂は使える?</p>
            <p>
              第1食堂は屋内飲食が可能ですが、 食堂の営業はございません。 また、
              第2食堂・生協は終日営業していません。
            </p>
          </div>
        </div>
        <div class="category">
          <div class="qa">
            <p>Q4</p>
            <p>A4</p>
          </div>
          <div class="content">
            <p>災害が発生した場合は?</p>
            <p>
              大学祭実行委員の指示に従い、お近くの避難場所へ避難してください。
              避難場所は野外音楽堂、都市科学部棟裏です。
            </p>
          </div>
        </div>
        <div class="category">
          <div class="qa">
            <p>Q5</p>
            <p>A5</p>
          </div>
          <div class="content">
            <p>雨が降ったとき企画はどうなる?</p>
            <p>
              企画場所が変更または中止となる場合がございます。
              詳しくは配布しているパンフレットのタイムテーブル
              (p.9-10)、イベント& ステージ(p.11-12)をご確認ください。
              また、最新情報については、<NuxtLink to="/news" class="linkto"
                >NEWSページ</NuxtLink
              >にてお知らせいたします。
            </p>
          </div>
        </div>
        <div class="category">
          <div class="qa">
            <p>Q6</p>
            <p>A6</p>
          </div>
          <div class="content">
            <p>各最寄り駅・バス停への行き方は?</p>
            <p>
              <NuxtLink to="/access" class="linkto">ACCESSページ</NuxtLink
              >をご覧ください。
            </p>
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
  padding-bottom: 10vh;
}

.box {
  background-color: rgba(134, 249, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0 30px 15px rgba(134, 249, 255, 0.2);
  padding: 5% 8%;
  opacity: 90%;
  margin: 12rem 8vw 0;
  @include md {
    margin-top: 18rem;
    padding: 2% 8%;
    margin: 8rem 7vw 0;
  }
  @include sm {
    margin-top: 7rem;
  }
}

.category {
  display: flex;
  margin-top: 10vh;
  margin-bottom: 10vh;
}

.qa {
  display: flex;
  flex-direction: column;
  font-family: "Amiri", sans-serif;
}

.content {
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
}

.linkto {
  color: #fff;
}

p {
  @include md {
    font-size: 15px;
  }
}
</style>
