<template>
  <main class="container">
    <div class="bg"></div>
    <section class="firstview">
      <lottie class="nameAnimation" :options="defaultOptions" v-on:animCreated="handleAnimation"/>
      <!-- <h1>
          <p class="fadeAnimation">HAYATO KATO</p>
      </h1> -->
      <div class="profile">
        <p>I am a web designer and developer.</p>
        <p>I work in Tokyo. I also take and edit photos and videos.</p>
        <p>My goal is to build a better society through the power of design.</p>
      </div>
      <div class="period">2020 - 2021</div>
      <div class="arrow">
        <img src="~/assets/image/arrow.svg">
      </div>
      <div class="circle">
        <img src="~/assets/image/circle.svg">
      </div>
    </section>
    <section class="work">
      <h2>work</h2>
      <hr>
      <div class="work_inner">
        <Card v-for="content in contents"
          :title="content.title"
          :number="content.number"
          :image="content.image"
          :category="content.category"
          :key="content.id" />
      </div>
    </section>
    <section class="contact">
      <h2>CONTACT</h2>
      <hr>
      <div class="contact_inner">
        <ul class="contactTitle">
            <a href=""><li class="contactTitle__mail"><p>Mail</p><p><span>hayatokato0410@gmail.com</span></p></li></a>
            <a href=""><li class="contactTitle__twitter"><p>Twitter</p><p><span>@hayatokato0410</span></p></li></a>
            <a href=""><li class="contactTitle__instagram"><p>Instagram</p><p><span>@hayatokato0410</span></p></li></a>
        </ul>
        <div class="marquee-wrap">
          <ul class="marquee-list">
            <li class="marquee-item">Get in Touch</li>
          </ul>
          <ul class="marquee-list_2">
            <li class="marquee-item">Get in Touch</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import axios from 'axios'
import * as animationData from "~/assets/animation/animation.json";
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
        duration: 1,
        scrollTrigger: {
          trigger: '.work hr',
          start: 'top 70%',
          // end: 'top 50%',
          // scrub: 1,
          // markers: true
        }
      })
    },
    scrollBgAnimationE() {
      gsap.to('.contact hr', {
        width: '90vw',
        duration: 1,
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
    // color: white;
    width: 60vw;
    margin-top: 20px;
    line-height: 1.5;
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
    bottom: 60px;
    right: 45px;
    width: 10px;
  }
  .circle{
    width: 100px;
    position: absolute;
    bottom: 25px;
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
    min-height: 60vh;
    width: $Sp-width;
    margin: 0 20px;
    font-family: 'butler';
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
    li{
      font-size: 32px;
      border-bottom: 1px solid #000;
      margin-top: 32px;
      padding-bottom: 24px;
      display: flex;
      justify-content: space-between;
      width: $Sp-width;
      height: auto;
      span{
        font-size: 16px;
      }
    }
  }
  @keyframes animation-marquee {
  0% {
    transform: translate(0%);
  }
  100% {
    transform: translate(-100%);
  }
}
@-webkit-keyframes animation-marquee {
  0% {
    transform: translate(0%);
  }
  100% {
    transform: translate(-100%);
  }
}
@mixin marquee {
  animation-name: animation-marquee;
  animation-duration: 16s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
}
@mixin marquee_2 {
  animation-name: animation-marquee;
  animation-duration: 16s;
  animation-timing-function: linear;
  animation-delay: 8s;
  animation-iteration-count: infinite;
  animation-direction: normal;
}

.marquee-wrap {
  // background: #232323;
  margin: 28px 0 0 0;
  height: 120px;
  overflow: hidden;
  position: relative;
  color: #000;
  border-bottom: 1px solid #000;
    .marquee-list {
      white-space: nowrap;
      position: absolute;
      @include marquee;
        .marquee-item {
          font-family: 'butler-Light';
          display: inline;
          white-space: nowrap;
          font-weight: lighter;
          font-size: 80px;
          padding: 0 80px 0 0;
             &:first-child {
              padding-left:calc(100vw + 40px);
            }
        }
    }
    .marquee-list_2 {
      white-space: nowrap;
      position: absolute;
      @include marquee_2;
        .marquee-item {
          font-family: 'butler-Light';
          display: inline;
          white-space: nowrap;
          font-weight: lighter;
          font-size: 80px;
          padding: 0 80px 0 0;
            &:first-child {
              padding-left:calc(100vw + 40px);
            }
        }
    }
  }
}
</style>