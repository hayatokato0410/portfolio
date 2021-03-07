<template>
  <ul class="workContainer">
    <li class="workTitle">
      <nuxt-link :to="`/`">
        <img class="thumbnail">
        <div class="workTitle_wrapper">
          <div class="workTitle_title">{{ title }}</div>
          <div class="workTitle_number">{{ number }}</div>
        </div>
        <!-- <div class="workTitle_category">{{ category }}</div> -->
        <!-- <img :src="image.url" alt=""> -->
        <!-- <img :src="image.url" alt=""> -->
        <div class="workLink">
          <p>View the work</p>
          <img src="~/assets/image/arrow02.svg" alt="">
        </div>
      </nuxt-link>
    </li>
  </ul>
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
    this.scrollWorkAnimationA()
  },
  methods: {
    scrollWorkAnimationA() {
      gsap.to('.workTitle', { // 動かしたい要素は".a"
        'margin-bottom': '20px', // 右方向に500動く
        duration: 0.2, // アニメーションは1秒間
        scrollTrigger: {
          trigger: '.workTitle', // 要素".a"がビューポートに入ったときにアニメーション開始
          start: 'top 70%', // アニメーション開始位置
          end: 'top 50%',
          scrub: 0.2,
          // markers: true // マーカー表示
        }
      })
    }
  },
  async asyncData() {
    const { data } = await axios.get(
    'https://hayato_portfolio.microcms.io/api/v1/works/',
       {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    return data
  },
  props: {
    number: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
.workContainer{
  .workTitle{
    font-family: 'butler-Medium';
    margin-top: 32px;
    // border-bottom: 1px solid $Bg-color;
    padding-bottom: 20px;
    &_wrapper{
      display: flex;
      width: $Sp-width;
      height: auto;
      justify-content: space-between;
      align-items: center;
      color: $Bg-color;
      mix-blend-mode:difference;
    }
    &_number{
        font-size: 20px;
        margin-top: 12px;
        font-family: 'butler-Light';
    }
    &_title{
        margin-top: 28px;
        letter-spacing: 0.025em;
        font-size: 40px;
        margin-bottom: 12px;
    }
    &_category{
      color: $Bg-color;
      mix-blend-mode:difference;
      font-family: 'Inter';
      font-size: 14px;
    }
    img{
      margin-top: 16px;
      width: $Sp-width;
      height: 60vh;
      background: white;
    }
  }
  .workLink{
    text-align: right;
    margin-top: 4px;
    display: flex;
    align-items: center;
    p{
      color: white;
      font-size: 16px;
      letter-spacing: 0.04em;
      font-family: 'Inter';
    }
    img{
      width: 32px;
      height: auto;
      mix-blend-mode: difference;
      margin: 0 0 0 12px;
      transform: rotate( 45deg );
      background: none;
    }
  }
}
</style>
