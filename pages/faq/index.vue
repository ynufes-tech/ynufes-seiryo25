<script setup lang="ts">
useHead({
   title: "FAQ | 25清陵祭公式HP~翠星~",
   meta:[
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
                        お近くのSTAFFジャンパーを着た大学祭実行委員にお声がけ頂くか､本部(経営学部1号館108教室)までお越しください。
                        場所はマップをご参照ください。
                    </p>
                </div>
            </div>
            <div class="category">
                <div class="qa">
                    <p>Q2</p>
                    <p>A2</p>
                </div>
                <div class="content">
                    <p>落とし物や迷子の相談は？</p>
                    <p>
                        お近くのSTAFFジャンパーを着た大学祭実行委員にお声がけ頂くか､本部(経営学部1号館108教室)までお越しください。
                        場所はマップをご参照ください。
                    </p>
                </div>
            </div>
            <div class="category">            
                <div class="qa">
                    <p>Q3</p>
                    <p>A3</p>
                </div>
                <div class="content">
                    <p>落とし物や迷子の相談は？</p>
                    <p>
                        お近くのSTAFFジャンパーを着た大学祭実行委員にお声がけ頂くか､本部(経営学部1号館108教室)までお越しください。
                        場所はマップをご参照ください。
                    </p>
                </div>
            </div>
            <div class="category">
                <div class="qa">
                    <p>Q4</p>
                    <p>A4</p>
                </div>
                <div class="content">
                    <p>落とし物や迷子の相談は？</p>
                    <p>
                        お近くのSTAFFジャンパーを着た大学祭実行委員にお声がけ頂くか､本部(経営学部1号館108教室)までお越しくだ
                        場所はマップをご参照ください。
                    </p>
                </div>
            </div>
            <div class="category">
                <div class="qa">
                    <p>Q5</p>
                    <p>A5</p>
                </div>
                <div class="content">
                    <p>落とし物や迷子の相談は？</p>
                    <p>
                        お近くのSTAFFジャンパーを着た大学祭実行委員にお声がけ頂くか､本部(経営学部1号館108教室)までお越しくだ
                        場所はマップをご参照ください。
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
    font-family: 'Amiri', sans-serif;
}

.content {
    display: flex;
    flex-direction: column;   
    margin-left: 3vw;
}

</style>