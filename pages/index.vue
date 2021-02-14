<template>
  <main class="container">
    <div class="mainContainer">
      <h1>
        <p><span class="textFadeIn">HAYATO</span></p>
        <p><span class="textFadeIn">KATO</span></p>
      </h1>
    </div>
    <section class="work">
      <h2>WORK</h2>
      <ul class="workContainer">
        <li class="workTitle" v-for="content in contents" :key="content.id">
          <nuxt-link :to="`/${content.id}`">
            <div class="workTitle__number">0{{ content.number }}</div>
            <h3><div class="workTitle__title">{{ content.title }}</div></h3>
            <!-- <div class="workTitle__category">{{ content.category }}</div> -->
            <div class="workArea"></div>
          </nuxt-link>
        </li>
      </ul>
    </section>
    <section class="contact">
      <h2>CONTACT</h2>
      <div class="contactContainer">
        <ul class="contactTitle">
            <a href=""><li class="contactTitle__mail"><p>Mail</p><p><span>hayatokato0410@gmail.com</span></p></li></a>
            <a href=""><li class="contactTitle__twitter"><p>Twitter</p><p><span>@hayatokato0410</span></p></li></a>
            <a href=""><li class="contactTitle__instagram"><p>Instagram</p><p><span>@hayatokato0410</span></p></li></a>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import {TweenMax} from "gsap"
import axios from 'axios'
export default {
   mounted () {
     TweenMax.to('.textFadeIn', 0.8,{y: '30%', ease: "power3.out"});
   },
  async asyncData({ params }) {
    const { data } = await axios.get(
    'https://hayato_portfolio.microcms.io/api/v1/works',
       {
        headers: { 'X-API-KEY': 'c4c9d84e-ca69-4a71-a4d2-d56d6870d9f7' }
      }
    )
    return data
  }
}

</script>

<style lang="scss" scoped>
html{
  background-color: $Bg-color;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  height: auto;
  display: block;
  width: $Sp-width;
    h2{
      font-family: 'Inter';
      font-weight: 700;
      text-align: left;
      font-size: 12px;
      border-bottom: 1px solid #000;
      padding-bottom: 16px;
    }
}
.mainContainer{
  height: 100vh;
  width: $Sp-width;
  margin: 0 auto;
  padding-top: 30vh;
  h1 p{
    font-family: 'butler';
    font-size: 60px;
    // background-color: gray;
    overflow: hidden;
    span{
      display: inline-block;
      transform: translateY(100%);
     }
  }
}
.workContainer{
  width: $Sp-width;
  margin: 0 auto 160px auto;
  font-family: 'butler';
  text-align: left;
  .workTitle{
    border-bottom: 1px solid #000;
    margin-top: 36px;
    padding-bottom: 40px;
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
  }
  .workArea{
    margin-top: 20px;
    height: $Sp-width;
    width: $Sp-width;
    background: white;
  }
}
.contactContainer{
  width: $Sp-width;
  margin: 0 auto 20px auto;
  font-family: 'butler';
  text-align: left;
  ul{
    li{
      font-size: 24px;
      border-bottom: 1px solid #000;
      margin-top: 24px;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;
      width: $Sp-width;
      height: auto;
      span{
        font-size: 14px;
      }
    }
  }
}
</style>