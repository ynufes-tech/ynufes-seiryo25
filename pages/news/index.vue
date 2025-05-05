<script setup lang="ts">
useHead({
   title: "News | 25清陵祭公式HP~翠星~",
   meta:[
    { name: "description", content: "最新情報はこちらから"},
   ], 
});
</script>
<template>
    <div class="page-root">
        <div class="page-container">
            <PageTitle :title="'NEWS'" :sub-title="'最新情報'" />
            <div class="box">
                <div class="pops">
                    <!-- <ColorButton
                        date="2025.00.00"
                        text="ニュース題名ニュース題名ニュース題名"
                        link="/latest-info"
                        class="news-title"
                    />
                    <ColorButton
                        date="2025.00.00"
                        text="ニュース題名ニュース題名ニュース題名"
                        link="/latest-info"
                        class="news-title"
                    />
                    <ColorButton
                        date="2025.00.00"
                        text="ニュース題名ニュース題名ニュース題名"
                        link="/latest-info"
                        class="news-title"
                    /> -->
                    <ColorButton
                        date="2025.04.21"
                        text="現在新着情報はありません"
                        class="news-title"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

.page-container {
    margin: 15vh 0;
}

.news-title {
    margin: 6vh 0 3rem;
    border-radius: 15px;
    @include md {
        margin: 3vh 0 3rem;
    }
}

.box {
  background-color: rgba(134, 249, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); 
  box-shadow: 0 0 30px 15px rgba(134, 249, 255, 0.2);
  padding: 1% 4%;
  opacity: 90%;
  margin: 12rem 8vw 10vh;
  @include md {
    margin-top: 18rem;
    padding: 2% 8%;
    margin: 8rem 7vw 0;
  }
  @include sm {
    margin-top: 7rem;
  }
}

.pops {
    margin-top: 19vh;
    @include md {
        margin-top: 11vh;
    }
    @include sm {
        margin-top: 8vh;
    }
}


</style>