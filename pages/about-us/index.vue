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
                        class="chairman-picture-img"
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
                            <p>メッセージメッセージメッセージメッセージメッセージメッセージ</p>
                        </div>
                    </div>
                        <div class="picture">
                            <img
                            id="lt-img"
                            class="member-picture-img"
                            src="/assets/images/no-image.png"
                            >
                            <img
                            id="rt-img"
                            class="member-picture-img"
                            src="/assets/images/no-image.png"
                            >
                        </div>
                </div>
            </div>
            <div class="department" :id="'planning'">
                <div class="about-re">
                    <div class="picture">
                        <img
                        id="lt-img"
                        class="member-picture-img"
                        src="/assets/images/no-image.png"
                        >
                        <img
                        id="rt-img"
                        class="member-picture-img"
                        src="/assets/images/no-image.png"
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
                            <p>メッセージメッセージメッセージメッセージメッセージメッセージ</p>
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
                            <p>メッセージメッセージメッセージメッセージメッセージメッセージ</p>
                        </div>
                    </div>
                    <div class="picture">
                        <img
                        id="lt-img"
                        class="member-picture-img"
                        src="/assets/images/no-image.png"
                        >
                        <img
                        id="rt-img"
                        class="member-picture-img"
                        src="/assets/images/no-image.png"
                        >
                    </div>
                </div>
            </div>
            <div class="department" :id="'accounting'">
                <div class="about-re">
                    <div class="picture">
                        <img
                        id="lt-img"
                        class="member-picture-img"
                        src="/assets/images/no-image.png"
                        >
                        <img
                        id="rt-img"
                        class="member-picture-img"
                        src="/assets/images/no-image.png"
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
                            <p>メッセージメッセージメッセージメッセージメッセージメッセージ</p>
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
                            <p>メッセージメッセージメッセージメッセージメッセージメッセージ</p>
                        </div>
                    </div>
                    <div class="picture">
                        <img
                        id="lt-img"
                        class="member-picture-img"
                        src="/assets/images/no-image.png"
                        >
                        <img
                        id="rt-img"
                        class="member-picture-img"
                        src="/assets/images/no-image.png"
                        >
                    </div>
                </div>
            </div>
            <div class="department" :id="'equipment'">
                <div class="about-re">
                    <div class="picture">
                        <img
                        id="lt-img"
                        class="member-picture-img"
                        src="/assets/images/no-image.png"
                        >
                        <img
                        id="rt-img"
                        class="member-picture-img"
                        src="/assets/images/no-image.png"
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
                            <p>メッセージメッセージメッセージメッセージメッセージメッセージ</p>
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
                            <p>メッセージメッセージメッセージメッセージメッセージメッセージ</p>
                        </div>
                    </div>
                    <div class="picture">
                        <img
                        id="lt-img"
                        class="member-picture-img"
                        src="/assets/images/no-image.png"
                        >
                        <img
                        id="rt-img"
                        class="member-picture-img"
                        src="/assets/images/no-image.png"
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

.rounded-button {
    border-radius: 50px;
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
    @include md {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

.about-re {
    display: flex;
    justify-content: flex-end;
    @include md {
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

.chairman-picture-img {
    width: 200px;
    height: auto;
    margin-left: 5rem;
    @include md {
        margin: 0;
    }
}

.member-picture-img {
    width: 200px;
    height: auto;
    @include md {
        width: 200px;
    }
}

#rt-img {
  margin-left: 1vw;
  margin-top: 18vh;
  @include md {
    margin-left: 5vw;
  }
  @media (max-width: 545px){
       margin: 4rem 0 0 20vw;
    }
}

#lt-img {
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

  @include md {
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