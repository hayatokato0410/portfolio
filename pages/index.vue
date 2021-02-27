<template>
  <main class="container">
    <div class="bg"></div>
    <section class="firstview">
      <h1>
          <p class="fadeAnimation">HAYATO KATO</p>
      </h1>
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
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
export default {
  mounted() {
    this.scrollItemA(),
    this.scrollItemB()
  },
  methods: {
    scrollItemA() {
      gsap.to('.bg', { // 動かしたい要素は".a"
        background: '#000', // 右方向に500動く
        duration: 1, // アニメーションは1秒間
        scrollTrigger: {
          trigger: '.work', // 要素".a"がビューポートに入ったときにアニメーション開始
          start: 'top 80%', // アニメーション開始位置
          end: 'top 75%',
          scrub: 1,
          markers: true // マーカー表示
        }
      })
    },
    scrollItemB() {
      gsap.to('.bg', { // 動かしたい要素は".a"
        opacity: '0', // 右方向に500動く
        duration: 1, // アニメーションは1秒間
        scrollTrigger: {
          trigger: '.work', // 要素".a"がビューポートに入ったときにアニメーション開始
          start: 'bottom 80%', // アニメーション開始位置
          end: 'bottom 75%',
          scrub: 1,
          markers: true // マーカー表示
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
  //   mounted: function() {
  //   var $allMsg = $('.fadeAnimation');
  //   var $wordList = $('.fadeAnimation').html().split("");
  //   $('.fadeAnimation').html("");
  //   $.each($wordList, function(idx, elem) {
  //       var newEL = $("<span/>").text(elem).css({ 'opacity': 0 });
  //       newEL.appendTo($allMsg);
  //       newEL.delay(idx * 100);
  //       newEL.animate({ 'opacity': 1 }, 2000);
  //   });
  // }
}

</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  height: auto;
  display: block;
  width: 100vw;
    h2{
      width: $Sp-width;
      margin: 0 auto;
      font-family: 'Inter';
      font-weight: 500;
      text-align: left;
      font-size: 16px;
      border-bottom: 1px solid $Bg-color;
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
  min-height: 90vh;
  width: $Sp-width;
  margin: 0 auto;
  font-family: 'butler';
  h1 {
    padding-top: 12vh;
    font-size: 52px;
    p{
    }
  }
  .profile{
    width: 60vw;
    margin-top: 20px;
    line-height: 1.5;
    font-size: 16px;
    opacity: 0.6;
  }
  .period{
    letter-spacing: 0.025em;
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 12px;
    font-family: 'Inter';
    font-weight: 500;
  }
  .arrow{
    position: absolute;
    bottom: 55px;
    right: 65px;
    mix-blend-mode:difference;
    width: 10px;
  }
  .circle{
    opacity: 0.6;
    width: 100px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    mix-blend-mode:difference;
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
  // background: #333;
  padding-top: 32px;
  padding-bottom: 40px;
  .work_inner{
    width: $Sp-width;
    margin: 0 auto;
  }
}
.contact{
    min-height: 90vh;
    padding-top: 60px;
    width: $Sp-width;
    margin: 0 auto 20px auto;
    font-family: 'butler';
    text-align: left;
  h2{
      color:  #333;
      border-bottom: 1px solid #333;
    }
  .contactTitle{
    li{
      color: #333;
      font-size: 32px;
      border-bottom: 1px solid #333;
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
  border-bottom: 1px solid #333;
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
          color: #333;
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
          color:  #333;
          padding: 0 80px 0 0;
            &:first-child {
              padding-left:calc(100vw + 40px);
            }
        }
    }
  }
}
</style>