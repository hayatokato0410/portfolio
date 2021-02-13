<template>
<div class="sectionTitle">
    <h2><span>WORK</span></h2>
</div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
export default {
  mounted() {
    this.scrollItemUnderLine(),
    this.scrollItemH2()
  },
  methods: {
    scrollItemH2() {
      gsap.to('.sectionTitle', { // 動かしたい要素は".a"
        width: 'calc(100vw - 40px)',// 右方向に500動く
        duration: 1, // アニメーションは1秒間
        ease: "expo.out",
        scrollTrigger: {
          trigger: '.sectionTitle', // 要素".a"がビューポートに入ったときにアニメーション開始
          start: 'top 80%', // アニメーション開始位置
          markers: false // マーカー表示
        }
      })
    },
    scrollItemUnderLine() {
      gsap.to('h2 span', { // 動かしたい要素は".a"
        y: 0,// 右方向に500動く
        duration: 1, // アニメーションは1秒間
        ease: "expo.out",
        scrollTrigger: {
          trigger: '.sectionTitle', // 要素".a"がビューポートに入ったときにアニメーション開始
          start: 'top 80%', // アニメーション開始位置
          markers: false // マーカー表示
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.sectionTitle{
    width: 0px;
    height: auto;
    margin-left: 20px;
    border-bottom: 1px solid #000;
    padding-bottom: 20px;
    h2{
        font-family: Inter;
        font-weight: 700;
        text-align: left;
        font-size: 12px;
        // background-color: gray;
        overflow: hidden;
        span{
            display: inline-block;
            transform: translateY(100%);
         }
    }
}
</style>
