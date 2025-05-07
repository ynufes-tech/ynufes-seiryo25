<script lang="ts" setup></script>

<template>
  <div class="color-sns">
    <div class="sns-field">
      <a
        id="sns-x"
        href="https://x.com/ynu_fes"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="x" src="~/assets/images/x.webp" />
      </a>
      <a
        id="sns-ins"
        href="https://www.instagram.com/ynu_fes"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="instagram" src="~/assets/images/Insta-color.webp" />
      </a>
      <a
        id="sns-f"
        href="https://www.facebook.com/ynufes"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="facebook" src="~/assets/images/facebook.webp" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.color-sns {
  width: 150px;
  margin: auto 3vw 6vw auto;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  //align-items: center;
  //justify-content: center;

  h1 {
    width: fit-content;
    text-align: center;
    font-size: 32px;
    margin-bottom: 30px;
  }
  .sns-field {
    display: flex;
    justify-content: space-around;
    gap: 30px;
    margin-bottom: 30px;
    img {
      transition: all 0.2s ease-in-out;
      aspect-ratio: 1;
    }
    #sns-f img {
      width: 30px;
      @include md {
        width: 25px;
      }
    }
    #sns-x {
      width: 35px;
      height: 35px;
      margin: 2.5px;
      @include md {
        width: 30px;
        height: 30px;
      }
      img {
        width: 25px;
        padding: 10px;
        @include md {
          width: 20px;
        }
      }
    }
    #sns-ins {
      width: 35px;
      img {
        width: 30px;
        padding: 5px;
        @include md {
          width: 25px;
        }
      }
    }
  }
}
</style>
