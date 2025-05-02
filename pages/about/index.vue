<script setup lang="ts">
useHead({
   title: "About | 25清陵祭公式HP~翠星~",
   meta:[
    { name: "description", content: "25清陵祭についての情報を掲載しています" },
   ], 
});
</script>

<template>
<div class="page-root">
    <div class="page-container">
        <PageTitle :title="'ABOUT'" :sub-title="'清陵祭について'" />
        <div class="flames">
            <div class="flame_1">
                <img class="white-flame" src="/assets/images/white-flame-upper.png">
            </div>
            <div class="flame_2">
                <img class="white-flame" src="/assets/images/white-flame-under.png">
            </div>
        </div>
        <div class="box">
            <div class="content">
                <div class="explain1">
                    <div class="theme1">
                        <h3>新しい想い出を紡ぐ。</h3>
                    </div>
                    <div class="message">
                        <p>清陵祭は、毎年5月に開催される横浜国立大学の大学祭です。</p>
                        <p>
                            次々と並び立つ食欲をそそる模擬店、<br>
                            心躍る音楽と目を奪われるダンス、<br>
                            唯一無二の企画が彩るキャンパス。<br>
                            きっと、あなたも忘れたくない瞬間に出会えます。
                        </p>
                        <p>
                            ご来場に際して事前予約は不要です。<br>
                            ぜひ、お気軽にお越しください。
                        </p>
                    </div>
                </div>
                <div class="explain2">
                    <div class="message">
                        <p>2025年の清陵祭テーマは、「翠星」</p>
                        <p>「翠」は5月の誕生石エメラルドを指しています。</p>
                        <p> 春から初夏への変わり目の5月。<br>
                            新緑の葉が風に揺らめき、心の中にも芽吹きの兆しが現れます。<br>
                            「翠星」には、爽やかな希望が輝く大学祭になることへの願いが込められています。
                        </p>
                    </div>
                    <div class="theme2">
                        <h3>「翠星」</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="date-box">
            <div class="inner-date-box">
                <div class="info">
                    <div class="info-label">
                        <p>開催日時</p>
                    </div>
                    <div class="info-content">
                        <p>
                        1日目：5月17日(土)　13:00 - 20:30<br >
                        2日目：5月18日(日)　9:00 - 15:00
                        </p>
                    </div>
                </div>
                <div class="info">
                    <div class="info-label">
                        <p>会場</p>
                    </div>
                    <div class="info-content">
                        <p>横浜国立大学　常盤台キャンパス</p>
                    </div>
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

.flame_1 img {
    position: absolute;
    margin: 21vh 10vw;
    width: 8vw;
    z-index: 900;
}

.flame_2 img {
    position: absolute;
    margin: 160vh 80vw;
    width: 8vw;
    z-index: 900;
    @include md {
        margin: 160vh 80vw;
    }
    @include sm {
        margin: 175vh 80vw;
    }
    @media (max-width: 430px) {
        margin: 190vh 80vw;
    }
}

.box {
  background-color: rgba(134, 249, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); 
  box-shadow: 0 0 30px 15px rgba(134, 249, 255, 0.2);
  padding: 1% 4%;
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

.date-box {
  display: flex;
  justify-content: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); 
  box-shadow: 0 0 30px 15px rgba(134, 249, 255, 0.2);
  padding: 1% 4%;
  background-color: rgba(134, 249, 255, 0.2);
  margin: 5rem auto 0;
  width: 75%;
  @include xl {
    width: 55vw;
  }
  @include lg {
    width: 67vw;
  }
  @include md {
    width: 72vw;
  }
  @include sm {
    width: 75vw;
  }
}

.content {
    justify-content: center;
    color: #FFFFFF;
}

.explain1 {
    display: flex;
    justify-content: flex-end;
    margin: 10vh 0;
    font-size: 22px;
    @media (max-width: 860px) {
        font-size: 18px;
        display: flex;
        flex-direction: column;
    }
    @include sm {
        font-size: 16px; 
    }
}

.explain2 {
    display: flex;
    justify-content: flex-start;
    margin: 10vh 0;
    font-size: 22px;
    @media (max-width: 860px) {
        font-size: 18px;
        display: flex;
        flex-direction: column-reverse;
    }
    @include sm {
        font-size: 16px; 
    }
}

.theme1 {
    display: flex;
    align-items: center;
    margin-right: 5vw;
    h3{
        font-weight:lighter;
    }
    @include md {
        margin: 0;
    }
}

.theme2 {
    position: absolute;
    margin: 4.5vh 63vw;
    margin-right: 5vw;
    h3{
        font-weight:lighter;
    }
    @media (max-width: 860px) {
        position: relative;
        margin: 0;
    }
}

.inner-date-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #FFFFFF;
}

.info {
  display: flex;
  justify-content: space-between;
  position: relative;
  @include md {
    flex-direction: column;
  }
}

.info-label {
    white-space: nowrap;
    min-width: 8rem;
    padding-right: 8vw;
    border-right: 1px solid rgba(255, 255, 255, 0.7);
    @include md {
        display: flex;
        padding: 0;
        justify-content: center;
        border-right: 0;
        font-size: 20px;
    }
}

.info-content {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    margin-left: 10vw;
    @include md {
        display: flex;
        margin: 0;
        justify-content: center;
        border-right: 0;
    }
}

.info-content p {
  line-height: 3;

}


</style>