<script setup lang="ts">

useHead({
  title: 'MAP | キャンパスマップ',
  meta: [
    { name: 'description', content: 'キャンパスマップをご紹介します' },
  ],
})
</script>

<template>
  <div class="page-root">
    <PageTitle title="MAP" sub-title="キャンパスマップ" />
    <div class="content-box">
      <!-- キャンパスマップ画像 -->
      <div class="image-container">
        <img
            alt="campus-map"
            class="campus-map-webp"
            src="~/assets/images/campus-map.webp"
        />
      </div>

      <!-- ダウンロードボタンのみ -->
      <div class="download">
        <a
            class="download-image-button"
            href="https://www.ynu.ac.jp/access/pdf/YNU_MAP_J.pdf"
            download
        >
          <img
              src="~/assets/images/download-button-white.webp"
              alt="ダウンロード"
          />
        </a>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use 'assets/scss/breakpoint' as *;

.page-root {
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
}

.content-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 10%;
  margin-top: 3em;
}

.image-container {
  width: 100%;
  max-width: 900px;
  margin-top: 7em;
  margin-bottom: 2em;

  img.campus-map-webp {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
  }

  @include md {
    margin-top: 4em;
  }
}

.download {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4em;

  .download-image-button img {
    width: 200px;
    transition: 0.3s ease-in-out;

    &:hover {
      content: url('@/assets/images/download-button-blue.webp');
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