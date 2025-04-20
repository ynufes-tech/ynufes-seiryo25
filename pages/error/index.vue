<script setup lang="ts">
useHead({
  title: 'Top | 25清陵祭公式HP~翠星~',
  meta: [
    {
      name: 'description',
      content: 'エラーページです',
    },
  ],
});
</script>

<template>
    <div class="page-root">
        <div class="page-container">
            <PageTitle :title="'ERROR'" :sub-title="'404'" />
            <div class="box">
                <div class="explanation">
                    <p>
                    お探しのページは見つかりませんでした。
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