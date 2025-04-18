<script setup lang="ts">
useHead({
   title: "About-us | 25清陵祭公式HP~翠星~",
   meta:[
    { name: "description", content: "大学祭実行委員についての情報を掲載しています" },
   ], 
});
import ColorButton from '~/components/ColorButton.vue'
import { ref } from 'vue';

const isHovered = ref(false);

const departments = [
    {label:"・会場部", id:"peacepreservation"},
    {label:"・企画部", id:"planning"},
    {label:"・技術部", id:"technology"},
    {label:"・経理部", id:"accounting"},
    {label:"・総務部", id:"generalaffair"},
    {label: "・物品部", id:"equipment"},
    {label:"・編集部", id:"editional"},
];
const showDropdown = () => {
  isHovered.value = true;
};
const hideDropdown = () => {
  isHovered.value = false;
};
</script>

<template>
<div class="page-root">
    <div class="page-container">
        <PageTitle :title="'ABOUT-US'" :sub-title="'大学祭実行委員会について'" />
        <div class="box1">
            <div class="explain">
                <p>年に二度、キャンパス全体が特別な高揚感に包まれる大学祭。<br/>
                    私たち大学祭実行委員会は、心からの笑顔が溢れる大学祭にするために一丸となって活動しています。<br/>
                    そして、準備段階から当日まで、7つの部局がそれぞれの専門性を最大限に発揮します。
                </p>            
            </div>
            <div class="buttons">
                <div class="about-us-button">
                    <ColorButton 
                    text="委員長挨拶"
                    link="#chairman"
                    class="rounded-button"
                    />
                </div>
                <div class="about-us-button" @mouseenter="showDropdown" @mouseleave="hideDropdown">
                    <ColorButton 
                    text="7つの部局"
                    class="rounded-button"
                    />
                    <ul v-if="isHovered" class="dropdown-list">
                        <li v-for="dept in departments" :key="dept.id">
                            <NuxtLink :to ="'#' + dept.id">{{ dept.label }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="box2">
            <div class="chairman" id="chairman">
                <div class="name_wrapper">
                    <div class="moon">
                        <img
                        class="moon-img"
                        src="/assets/images/moon-logo.webp"
                        >
                    </div>
                    <div class="name">
                        <p>委員長挨拶</p>
                    </div>
                </div>
                <div class="about-nm">
                    <div class="message">
                        <p>メッセージメッセージメッセージメッセージメッセージメッセージ</p>
                    </div>
                    <div class="picture">
                        <img
                        class="chairman-img"
                        src="/assets/images/no-image.png"
                        >
                    </div>
                </div>
            </div>
            <div class="department" :id="'peacepreservation'">
                <div class="about-nm">
                    <div class="set">
                        <div class="name_wrapper">
                            <div class="moon">
                                <img
                                class="moon-img"
                                src="/assets/images/moon-logo.webp"
                                >
                            </div>                    
                            <div class="name">
                                <p>会場部</p>
                            </div>
                        </div>                        
                        <div class="message">
                            <p>
                                会場部は、来場者の皆さまに安心して大学祭を楽しんでいただけるよう、
                                会場の設営や、当日の巡回・パトロールなどを行っています。<br/>
                                当日、何かお困りのことがありましたら、どうぞお気軽にお声がけください！！
                            </p>
                        </div>
                    </div>
                        <div class="picture">
                            <img
                            id="lt-img"
                            class="member-img"
                            src="/assets/images/about-us_pictures/peacepreservation/peacepreservation1.webp"
                            >
                            <img
                            id="rt-img"
                            class="member-img"
                            src="/assets/images/about-us_pictures/peacepreservation/peacepreservation2.webp"
                            >
                        </div>
                </div>
            </div>
            <div class="department" :id="'planning'">
                <div class="about-re">
                    <div class="picture">
                        <img
                        id="lt-img"
                        class="member-img"
                        src="/assets/images/about-us_pictures/planning/planning1.webp"
                        >
                        <img
                        id="rt-img"
                        class="member-img"
                        src="/assets/images/about-us_pictures/planning/planning2.webp"
                        >
                    </div>
                    <div class="set">
                        <div class="name_wrapper">
                            <div class="moon">
                                <img
                                class="moon-img"
                                src="/assets/images/moon-logo.webp"
                                >
                            </div>                    
                            <div class="name">
                                <p>企画部</p>
                            </div>
                        </div>
                        <div class="message">
                            <p>
                                企画部は学祭で何をするかをゼロから考え、実施する部局です。<br/>
                                毎週の会議で来場者が楽しめる企画を練り、花火の打ち上げや外部ゲストの招待など、
                                本部企画全体に関わる業務を担っています。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="department" :id="'technology'">
                <div class="about-nm">
                    <div class="set">
                        <div class="name_wrapper">
                            <div class="moon">
                                <img
                                class="moon-img"
                                src="/assets/images/moon-logo.webp"
                                >
                            </div>                    
                            <div class="name">
                                <p>技術部</p>
                            </div>
                        </div>
                        <div class="message">
                            <p>
                                技術部は、今皆さんが見ているこのホームページを作成している部局です。<br/>
                                見やすく使いやすいホームページを作成するために、各大学祭ごとに１からデザインを考え、
                                プログラミングを行っています。様々なコンテンツを載せておりますので、ぜひご覧ください！
                            </p>
                        </div>
                    </div>
                    <div class="picture">
                        <img
                        id="lt-img"
                        class="member-img"
                        src="/assets/images/about-us_pictures/technology/technology1.webp"
                        >
                        <img
                        id="rt-img"
                        class="member-img"
                        src="/assets/images/about-us_pictures/technology/technology2.webp"
                        >
                    </div>
                </div>
            </div>
            <div class="department" :id="'accounting'">
                <div class="about-re">
                    <div class="picture">
                        <img
                        id="lt-img"
                        class="member-img"
                        src="/assets/images/about-us_pictures/accounting/accounting1.webp"
                        >
                        <img
                        id="rt-img"
                        class="member-img"
                        src="/assets/images/about-us_pictures/accounting/accounting2.webp"
                        >
                    </div>
                    <div class="set">
                        <div class="name_wrapper">
                            <div class="moon">
                                <img
                                class="moon-img"
                                src="/assets/images/moon-logo.webp"
                                >
                            </div>                    
                            <div class="name">
                                <p>経理部</p>
                            </div>
                        </div>
                        <div class="message">
                            <p>
                                こんにちは！経理部です！<br/>
                                経理部は大学祭のお金の管理を担う重要な部局です💰<br/>
                                私たちは予算案の作成、団体の受付といったお金に関する仕事を通して、大学祭が円滑に運営されるように支えております。<br/>
                                当日は来場者の方々とは直接関わる機会は少ないと思いますが、楽しんでいただけたら幸いです！
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="department" :id="'generalaffair'">
                <div class="about-nm">
                    <div class="set">
                        <div class="name_wrapper">
                            <div class="moon">
                                <img
                                class="moon-img"
                                src="/assets/images/moon-logo.webp"
                                >
                            </div>                    
                            <div class="name">
                                <p>総務部</p>
                            </div>
                        </div>
                        <div class="message">
                            <p>
                                総務部は、企画団体の皆様との窓口となる部局です。<br/>
                                説明会や企画受付、提出書類の確認など、その活動は多岐にわたります。
                                また、大学祭に関する規定を定めたり、食品や企画の安全面を考慮したり、当日の見回りをしたりなど、
                                デスクワークから現場仕事まで幅広く活動しております。
                            </p>
                        </div>
                    </div>
                    <div class="picture">
                        <img
                        id="lt-img"
                        class="member-img"
                        src="/assets/images/about-us_pictures/generalaffair/generalaffair1.webp"
                        >
                        <img
                        id="rt-img"
                        class="member-img"
                        src="/assets/images/about-us_pictures/accounting/accounting2.webp"
                        >
                    </div>
                </div>
            </div>
            <div class="department" :id="'equipment'">
                <div class="about-re">
                    <div class="picture">
                        <img
                        id="lt-img"
                        class="member-img"
                        src="/assets/images/about-us_pictures/equipment/equipment1.webp"
                        >
                        <img
                        id="rt-img"
                        class="member-img"
                        src="/assets/images/about-us_pictures/equipment/equipment2.webp"
                        >
                    </div>
                    <div class="set">
                        <div class="name_wrapper">
                            <div class="moon">
                                <img
                                class="moon-img"
                                src="/assets/images/moon-logo.webp"
                                >
                            </div>                    
                            <div class="name">
                                <p>物品部</p>
                            </div>
                        </div>
                        <div class="message">
                            <p>
                                物品部は大学祭当日に団体の企画で必要な物品の管理、貸出、企業との仲介を行う部局です。<br/>
                                直前期以外は団体に貸し出すテントの天幕を洗う活動をしています。<br/>
                                学祭の裏方的な仕事ではありますが、
                                企画をするためになくてはならない存在として学祭を支えています。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="department" :id="'editional'">
                <div class="about-nm">
                    <div class="set">
                        <div class="name_wrapper">
                            <div class="moon">
                                <img
                                class="moon-img"
                                src="/assets/images/moon-logo.webp"
                                >
                            </div>                    
                            <div class="name">
                                <p>編集部</p>
                            </div>
                        </div>
                        <div class="message">
                            <p>編集部では、大学祭期間中に構内を彩る装飾や、
                                大学祭をわかりやすく解説するパンフレット・リーフレットの製作を行っています！<br/>
                                当日は案内所でパンフレットを配布し、皆さんをご案内します🙌
                                パンフレットや装飾などと共に記憶に残る大学祭をお楽しみください。
                            </p>
                        </div>
                    </div>
                    <div class="picture">
                        <img
                        id="lt-img"
                        class="member-img"
                        src="/assets/images/about-us_pictures/editional/editional1.webp"
                        >
                        <img
                        id="rt-img"
                        class="member-img"
                        src="/assets/images/about-us_pictures/editional/editional2.webp"
                        >
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
  padding: 0 10vw 10vh;
}

.box1 {
    margin-top: 35vh;
    @include md {
        margin-top: 23vh;
    }
    @include md {
        margin-top: 22vh;
    }
}

.buttons {
    display: flex;
    justify-content: flex-start;
    margin-top: 10vh;
}

.about-us-button {
    margin: 0 4vw;
}

.dropdown-list {
  background: 
  radial-gradient(circle 180px at 10% 40%, #B4D7EA, transparent 80%),
  radial-gradient(circle 200px at 10% 40%, #87DBFF, transparent 50%),
  radial-gradient(circle 500px at 50% 50%, #609BEB, transparent 60%);
  list-style: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 0;

  li {
    position: relative;
    margin: 6px 0;

    a {
      position: relative;
      display: block;
      padding: 8px 16px;
      color: #fff;
      text-decoration: none;
      border-radius: 8px;
      overflow: hidden;
      z-index: 1;
      transition: background-color 0.3s;
      
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent 70%);
        opacity: 0;
        transition: opacity 0.3s;
        border-radius: 50%;
        z-index: 0;
      }
      &:hover::before {
        opacity: 1;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.5);
        color: #000;
      }
    }
  }
}

.chairman {
    margin-bottom: 23vh;
}

.department {
    margin: 10vh 0;
}

.name_wrapper {
    display: flex;
}

.name {
    display: flex;
    align-items: center;
}

.moon-img {
    width: 100px;
    height: 100px;
}

.box2 {
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
}

.about-nm {
    display: flex;
    justify-content: flex-start;
    @media (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

.about-re {
    display: flex;
    justify-content: flex-end;
    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
}

.picture {
    display: flex;
    align-items: center;
    @media (max-width: 545px){
        flex-direction: column;
    }
}

.chairman-img {
    width: 200px;
    height: auto;
    margin-left: 5rem;
    @include md {
        margin: 0;
    }
}

.member-img {
    width: 220px;
    height: auto;
    @include md {
        width: 200px;
    }
}

#rt-img {
  margin: 18vh 1.2rem 0 1.2rem;
  @include md {
    margin-left: 5vw;
  }
  @media (max-width: 545px){
       margin: 4rem 0 0 20vw;
    }
}

#lt-img {
    margin: 0 1.2rem;
    @media (max-width: 545px){
       margin: 3rem 20vw 0 0;
    }
}

.message {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 12px; // 枠線として使う余白
  margin: 5vh 1vw;
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
  width: 30vw;
  filter: drop-shadow(5px 3px 10px  rgba(255, 255, 255, 0.9));

  @media (max-width: 1000px) {
    width: fit-content;
  }

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
    padding: 12px 14px;
    font-size: 23px;
    color: #222;
    @include md {
      font-size: 18px;
      padding: 12px 15px;
    }
    @include sm {
      font-size: 15px;
      padding: 15px 15px;
    }
  }
}  


</style>