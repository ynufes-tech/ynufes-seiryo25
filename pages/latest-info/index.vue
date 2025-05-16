<script lang="ts" setup>
import BackToButton from '~/components/BackToButton.vue'
</script>

<template>
  <div class="page-root">
      <div class="page-container">
        <div class="pop">
          <div class="date">
              <p>2025.05.17</p>
          </div>
          <div class="news-title">
              <p>-5月17日(土)の清陵祭運営について-</p>
          </div>
        </div>
        <div class="detail">
          <p>本日 5月17日(土)の清陵祭運営は、通常通り開催予定です。</p>
          <p>屋外の本部企画など、一部プログラムは雨天時の対応とさせていただくものがございます。25清陵祭公式ホームページのパンフレットをご参照ください。</p>

          <p>なお、これは現時点での判断となります。開催日時の一部変更等の可能性もございますので、定期的にこちらの広報をご確認ください。</p>

          <p>
            〈ご来場の際の諸注意〉<br/>
            当日の大学構内のメインストリートは大変混雑する恐れがございます。傘を使用される場合は他のお客様への通行の妨げになる恐れもございますので、レインコートをお持ちいただくことを推奨いたします。
            天候の急変に備えて、タオルや荷物保護のビニール袋なども併せてご準備ください。
            最寄り駅から大学までの道におきまして、足場が滑りやすくなっている恐れもございます。転倒などの小さな事故には十分にご注意のうえ、お越しください。
          </p>
        </div>
        <BackToButton
          text = "ニュース一覧に戻る"
          link = "/news"
        />
      </div>
  </div>
</template>


<style scoped lang="scss">
@use "@/assets/scss/_breakpoint.scss" as *;

.page-container {
  display: flex;
  flex-direction: column;
  padding-bottom: 10vh;
  margin: 10vh 10vw;
}

.pop {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  filter: drop-shadow(9px 19px 12px rgba(255, 255, 255, 0.4));
  background: linear-gradient(
  90deg,
  rgba(44,163,255,0.6) 0%, 
  rgba(113,255,210,0.6) 0%, 
  rgba(129,240,255,0.6) 17%, 
  rgba(58,215,181,0.6) 44%, 
  rgba(162,240,254,0.6) 67%, 
  rgba(157,255,209,0.6) 91%
  )
}

.date {
  font-size: 18px;
  padding: 0 2vw;
  margin: 0;
}

.news-title {
  display: flex;
  justify-content: center;
  margin: 0 5vw 5vh;
  padding: 0;
  @include md {
    margin: 0 5vw 3vh;
  }
}

.detail {
  flex-direction: column;
  position: relative;
  display: inline-flex;
  justify-content: center;
  border-radius: 10px;
  padding: 12px; // 枠線として使う余白
  margin-top: 10vh;
  background: #fff;
  background: linear-gradient(
    90deg, 
    rgba(44,163,255,1) 0%, 
    rgba(113,255,210,1) 0%, 
    rgba(129,240,255,1) 17%, 
    rgba(58,215,181,1) 44%, 
    rgba(162,240,254,1) 67%, 
    rgba(157,255,209,1) 91%
  );
  background-size: 200% 200%;
  overflow: hidden;
  width: fit-content;
  filter: drop-shadow(5px 3px 10px rgba(255, 255, 255, 0.9));

  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 10px;
    background: #fff;
    z-index: 1;
  }

  p {
    position: relative;
    z-index: 2;
    margin: 0;
    padding: 25px 40px;
    font-size: 25px;
    color: #222;
    @include md {
      font-size: 20px;
      padding: 20px 30px;
    }
    @include sm {
      font-size: 18px;
      padding: 15px 15px;
    }
  }
}  
</style>