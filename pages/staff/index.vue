<script setup lang="ts">
useHead({
  title: 'Staff | 25清陵祭公式HP~翠星~',
  meta: [
    { name: 'description', content: 'お問い合わせはこちら' },
  ],
})
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <PageTitle
        :title="'STAFF'"
        :sub-title="'大学祭に関するお問い合わせ'"
      />
      <div class="box">
        <div class="explanation">
          <p>清陵祭に興味を持っていただきありがとうございます。</p>
          <p>お問い合わせに関しましては、メールにてお願いします。</p>
        </div>
        <div class="content">
          <p>
            メールでのお問い合わせ<br>
            メールアドレス：25seiryo.soumu@gmail.com<br>
          </p>
          <!-- <p> -->
          <!-- ※HPに関するお問い合わせは以下までお願いします。<br /> -->
          <!-- メールアドレス：<br /> -->
          <!-- </p> -->
        </div>
        <div class="message">
          <p>
            お問い合わせいただく場合、本文にお名前とお問い合わせ内容の記入を忘れずにお願いします。<br>
            お問い合わせ内容を確認後、担当者より連絡させていただきます。
          </p>
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
    flex-direction: column;
    align-items: center;
    margin-top: 4vh;
    margin-bottom: 17vh;
    @include md {
      margin-bottom: 6vh;
    }
}

.message {
    margin-top: 10vh;
    @include md {
      margin-top: 8vh;
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
</style>
