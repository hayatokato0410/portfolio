<template>
  <div class="container">
    <section class="about">
      <lottie class="nameAnimation" :options="defaultOptions" v-on:animCreated="handleAnimation"/>
      <ul class="aboutContainer">
        <li class="aboutTitle" v-for="content in contents" :key="content.id">
            <div class="aboutTitle__age">{{ content.age }}</div>
            <h3><div class="aboutTitle__name">{{ content.name }}</div></h3>
            <!-- <div class="workTitle__category">{{ content.category }}</div> -->
            <div class="aboutTitle__profile">{{ content.profile }}</div>
            <div class="aboutArea"></div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import axios from 'axios'
import * as animationData from "~/assets/animation/about.json";
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
export default {
  mounted: function () {
    // this.scrollBgAnimationA(),
    // this.scrollBgAnimationB(),
    // this.scrollBgAnimationC(),
    // this.scrollBgAnimationD(),
    // this.scrollBgAnimationE()
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
  },
  async asyncData() {
    const { data } = await axios.get(
    'https://hayato_portfolio.microcms.io/api/v1/about',
       {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    return data
  },
}

</script>

<style lang="scss">
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
.about{
  color: #000;
  min-height: 90vh;
  width: $Sp-width;
  margin: 0 auto;
  font-family: 'butler';
  .aboutContainer{
    margin-top: 20px;
  }
}
</style>
