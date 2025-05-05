<script setup lang="ts">
useHead({
  title: 'Access | 25清陵祭公式HP~翠星~',
  meta: [
    { name: 'description', content: '横浜国立大学までのアクセスはこちらから' },
  ],
})
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <PageTitle
        :title="'ACCESS'"
        :sub-title="'大学までのアクセス'"
      />
      <div class="box">
        <div class="explanation">
          <p>大学推奨ルートでの来場をお願いします。</p>
        </div>
        <div class="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.2531241828697!2d139.58826227605002!3d35.473280572655035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601859679ea21c77%3A0x28d72ba15dae9e6c!2sYokohama%20National%20University!5e0!3m2!1sen!2sjp!4v1710676695264!5m2!1sen!2sjp"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="university-map"
          />
        </div>
        <div class="mitsukami">
          <div class="about">
            <p>
              横浜市営地下鉄ブルーライン「三ッ沢上町駅」より<br>
              徒歩約16分
            </p>
          </div>
          <div class="maps">
            <img
              class="mitsukami-map"
              src="/assets/images/mitsukami-map.png"
              alt="三ツ沢上町駅周辺地図"
            >
          </div>
          <div class="detail-button">
            <BlackButton
              text="詳しくはこちら"
              link="https://www.ynu.ac.jp/access/train_front.html"
            />
          </div>
        </div>
        <div class="wadamachi">
          <div class="about">
            <p>
              相鉄本線「和田町駅」より<br>
              徒歩約20分
            </p>
          </div>
          <div class="maps">
            <img
              class="wadamachi-map"
              src="/assets/images/wadamachi-map.png"
              alt="和田町駅周辺地図"
            >
          </div>
          <div class="detail-button">
            <BlackButton
              text="詳しくはこちら"
              link="https://www.ynu.ac.jp/access/train_south.html"
            />
          </div>
        </div>
        <div class="hazawa">
          <div class="about">
            <p>
              相鉄新横浜線「羽沢横浜国大駅」より<br>
              徒歩約15分
            </p>
          </div>
          <div class="maps">
            <img
              class="hazawa-map"
              src="/assets/images/hazawa-map.png"
              alt="羽沢横浜国大駅周辺地図"
            >
          </div>
          <div class="detail-button">
            <BlackButton
              text="詳しくはこちら"
              link="https://www.ynu.ac.jp/access/train_hazawa.html"
            />
          </div>
        </div>
        <div class="bus">
          <div class="about">
            <p>横浜駅より<br>バス約20分</p>
          </div>
          <div class="detail-button">
            <BlackButton
              text="詳しくはこちら"
              link="https://www.ynu.ac.jp/access/bus.html"
            />
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
    justify-content: center;
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
      margin-top: 18rem;
      margin: 8rem 8vw 7vh;
    }
    @include sm {
      margin-top: 7rem;
      margin: 8rem 7vw 7vh;
    }
}

.explanation {
    display: flex;
    justify-content: center;
}

.google-map {
    display: flex;
    justify-content: center;
    margin-top: 10vh;
    margin-bottom: 13vh;
}

.mitsukami-map {
    width: 70vw;
    @include sm{
        width: 80vw;
    }
}

.wadamachi-map {
    width: 30vw;
    @include sm {
        width: 60vw;
    }
}

.hazawa-map {
    width: 70vw;
    @include sm{
        width: 80vw;
    }
}

.about {
    display: flex;
    justify-content: center;
    margin-top: 13vh;
    text-align: center;
}

.maps {
    display: flex;
    justify-content: center;
    margin-top: 0;
}

.detail-button {
    display: flex;
    justify-content: center;
    margin-top: 5vh;
}

p {
  font-size: 32px;
  @include md {
    font-size: 24px;
  }
  @include sm {
    font-size: 16px;
  }
}
</style>
