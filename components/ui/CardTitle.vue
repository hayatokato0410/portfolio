<template>
<div class="WorksTitle">
    <div class="WorksTitle__number"><p>01</p></div>
    <div class="WorksTitle__title"><h3><span>HINOKI.media</span></h3></div>
    <div class="WorksTitle__category"><p>Design</p></div>
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
    this.scrollItemH3()
  },
  methods: {
    scrollItemH3() {
      gsap.to('h3 span', { // 動かしたい要素は".a"
        y: '0',// 右方向に500動く
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
.WorksTitle{
    width: $Sp-width;
    margin: 24px auto 20px auto;
    font-family: 'butler';
    text-align: left;
    &__number{
        font-size: 14px;
        margin-bottom: 6px;
    }
    &__title{
        font-size: 40px;
    }
    &__category{
        font-size: 16px;
    }
    h3{
        // background-color: gray;
        overflow: hidden;
        span{
                display: inline-block;
                transform: translateY(100%);
            }
    }
}

</style>
