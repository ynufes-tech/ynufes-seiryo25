<script setup lang="ts">

useHead({
  title: 'Pamphlet | 25清陵祭のパンフレット紹介',
  meta: [
    { name: 'description', content: '25清陵祭のパンフレットをご紹介します' },
  ],
})
</script>

<template>
  <div class="page-root">
    <PageTitle title="PAMPHLET" sub-title="パンフレット紹介" />
    <div class="big-box">
      <!-- 左: ポスター画像 -->
      <div class="picture-holder">
        <img
            alt="pamphlet"
            class="pamphlet-img"
            src="~/assets/images/poster.webp"
        />
      </div>

      <!-- 右: テキスト＋ダウンロード -->
      <div class="download">
        <!-- 説明文をこの位置へ移動 -->
        <div class="about-text">
          <p>下のボタンから電子版パンフレットをダウンロードいただけます。</p>
        </div>

        <!-- ダウンロードボタン2種 -->
        <div class="option">
          <p>通常版（23.4MB）</p>
          <a
              class="download-image-button"
              href="https://storage.googleapis.com/seiryo25-assets/seiryo25-pamphlet-high.pdf"
              download
          >
            <img
                src="@/assets/images/download-button-white.png"
                alt="通常版ダウンロード"
            />
          </a>
        </div>

        <div class="option">
          <p>軽量版（17.5MB）</p>
          <a
              class="download-image-button"
              href="https://storage.googleapis.com/seiryo25-assets/seiryo25-pamphlet-light.pdf"
              download
          >
            <img
                src="@/assets/images/download-button-white.png"
                alt="軽量版ダウンロード"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

.page-root {
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
}

h1 {
  text-align: center;
  margin-bottom: 1em;
}

.big-box {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 6em 10% 2em;
  gap: 4em;
  margin-top: 7em; // ← ★ 追加して全体を下にずらす

  @include md {
    flex-direction: column;
    align-items: center;
    padding: 4em 2em 2em;
    gap: 2em;
    margin-top: 4em; // モバイル時も少しだけ下へ
  }
}

.picture-holder {
  width: max(50%, 500px);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    max-width: 450px;
    margin-top: 0;
  }

  @include md {
    width: 100%;

    img {
      max-width: 350px;
    }
  }
}

.right-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @include md {
    width: 100%;
  }
}

.about-text {
  font-size: 18px;
  text-align: center;
  color: white;
  margin-bottom: 2em;

  @include md {
    font-size: 16px;
  }
}

.download {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;

  @include md {
    width: 100%;
    margin-top: 1em;
  }

  .option {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0; // テキストとボタン密着

    p {
      margin-bottom: 0.2em; // わずかな余白
      font-size: 16px;

      @include md {
        font-size: 14px;
      }
    }

    .download-image-button img {
      width: 200px;
      transition: 0.3s ease-in-out;

      &:hover {
        content: url('@/assets/images/download-button-blue.png');
      }
    }
  }
}

p {
  font-size: 21px;

  @include md {
    font-size: 16px;
  }
}
</style>
