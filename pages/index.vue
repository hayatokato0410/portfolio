<template>
  <main class="container">
    <div class="bg"></div>
    <section class="firstview">
      <lottie class="nameAnimation" :options="defaultOptions" v-on:animCreated="handleAnimation"/>
      <!-- <h1>
          <p class="fadeAnimation">HAYATO KATO</p>
      </h1> -->
      <div class="profile">
        <p>I am a web designer and developer. I work in Tokyo. I also take and edit photos and videos.</p>
        <!-- <p>I work in Tokyo.</p>
        <p>I am a web designer and developer.</p>
        <p>I also take and edit photos and videos.</p> -->
      </div>
      <!-- <div class="period">2020 - 2021</div> -->
      <!-- <div class="arrow">
        <img src="~/assets/image/arrow.svg">
      </div>
      <div class="circle">
        <img src="~/assets/image/circle.svg">
      </div> -->
    </section>
    <section class="work">
      <h2>work</h2>
      <hr>
      <div class="work_inner">
        <Card v-for="content in contents"
          :title="content.title"
          :number="content.number"
          :category="content.category"
          :key="content.id" />
      </div>
    </section>
    <section class="contact">
      <h2>CONTACT</h2>
      <hr>
      <div class="contact_inner">
        <ul class="contactTitle">
            <a href=""><li class="contactTitle__instagram"><p>Mail</p><img src="~/assets/image/arrow.svg" alt=""></li></a>
            <a href=""><li class="contactTitle__twitter"><p>Twitter</p><img src="~/assets/image/arrow.svg" alt=""></li></a>
            <a href=""><li class="contactTitle__instagram"><p>Instagram</p><img src="~/assets/image/arrow.svg" alt=""></li></a>
        </ul>
      </div>
    </section>
  </main>
</template>
<script>
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import axios from 'axios'
import * as animationData from "~/assets/animation/hayatokato.json";
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
export default {
  mounted: function () {
    this.scrollBgAnimationA(),
    this.scrollBgAnimationB(),
    this.scrollBgAnimationC(),
    this.scrollBgAnimationD(),
    this.scrollBgAnimationE()
  },
  data() {
    return {
      // データを定義
      defaultOptions: { animationData: animationData },
      animationSpeed: 1
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    scrollBgAnimationA() {
      gsap.to('.bg', { // 動かしたい要素は".a"
        background: '#000', // 右方向に500動く
        duration: 0.2, // アニメーションは1秒間
        scrollTrigger: {
          trigger: '.work', // 要素".a"がビューポートに入ったときにアニメーション開始
          start: 'top 70%', // アニメーション開始位置
          end: 'top 50%',
          scrub: 0.2,
          // markers: true // マーカー表示
        }
      })
    },
    scrollBgAnimationB() {
      gsap.to('.bg', {
        opacity: '0',
        duration: 0.2,
        scrollTrigger: {
          trigger: '.work',
          start: 'bottom 70%',
          end: 'bottom 50%',
          scrub: 0.2,
        }
      })
    },
     scrollBgAnimationC() {
      gsap.to('.work', {
        opacity: '0',
        duration: 0.2,
        scrollTrigger: {
          trigger: '.work',
          start: 'bottom 70%',
          end: 'bottom 50%',
          scrub: 0.2,
        }
      })
    },
    scrollBgAnimationD() {
      gsap.to('.work hr', {
        width: '90vw',
        duration: 0.75,
        scrollTrigger: {
          trigger: '.work hr',
          start: 'top 80%',
          // end: 'top 50%',
          // scrub: 1,
          // markers: true
        }
      })
    },
    scrollBgAnimationE() {
      gsap.to('.contact hr', {
        width: '90vw',
        duration: 0.75,
        scrollTrigger: {
          trigger: '.contact hr',
          start: 'top 80%',
          // end: 'top 60%',
          // scrub: 1,
          // markers: true
        }
      })
    },
  },
  async asyncData() {
    const { data } = await axios.get(
    'https://hayato_portfolio.microcms.io/api/v1/works',
       {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    return data
  },
}

</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  height: auto;
  display: block;
  width: 100vw;
  text-align: left;
    h2{
      width: 1px;
      font-family: 'Inter';
      font-weight: 500;
      text-align: left;
      font-size: 16px;
      padding-bottom: 20px;
      color: $Bg-color;
    }
}
section{
  position: relative;
  z-index: 1;
}
.bg{
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: $Bg-color;
  z-index: 0;
}
.firstview{
  color: #000;
  min-height: 90vh;
  width: $Sp-width;
  margin: 0 auto;
  font-family: 'butler';
  // .nameAnimation{
  //   margin: 0 0;
  //   padding-top: 12vh;
  // }
  .profile{
    font-family: 'Inter';
    font-weight: 500;
    // color: white;
    // width: 55vw;
    margin-top: 4px;
    line-height: 1.8;
    font-size: 16px;
    opacity: 0.6;
  }
  .period{
    letter-spacing: 0.025em;
    position: absolute;
    bottom: 40px;
    font-size: 12px;
    font-family: 'Inter';
    font-weight: 500;
    // color: white;
  }
  .arrow{
    position: absolute;
    bottom: 75px;
    right: 45px;
    width: 10px;
  }
  .circle{
    width: 100px;
    position: absolute;
    bottom: 40px;
    right: 0px;
    animation: rotate_right 8s linear infinite;
    @keyframes rotate_right {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    img{
      width: 100px;
      height: auto;
    }
  }
}
.work{
  // background: #000;
  padding-top: 32px;
  padding-bottom: 40px;
  width: $Sp-width;
  margin: 0 auto;
  overflow: hidden;
  hr{
      width: 1px;
      color: $Bg-color;
    }
  .work_inner{
    width: $Sp-width;
    margin: 0 auto;
  }
}
.contact{
    color: #000;
    min-height: 70vh;
    width: $Sp-width;
    margin: 0 20px;
    font-family: 'Inter';
    font-weight: 400;
    text-align: left;
    overflow: hidden;
    hr{
      width: 1px;
      color: #000;
    }
  h2{
      color: #000;
    }
  .contactTitle{
    margin-top: 32px;
    li{
      font-size: 20px;
      padding-bottom:24px;
      display: flex;
      // justify-content: space-between;
      width: $Sp-width;
      height: auto;
      align-items: center;
      p{
        margin-right: 12px;
      }
      img{
        width: 7px;
        transform: rotate( -125deg );
        margin: 4px 0 0 0 ;
        opacity: 0.6;
        }
      span{
        font-size: 22px;
        text-decoration : underline;
        font-weight: bold;
      }
    }
  }

}
</style>