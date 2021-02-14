<template>
  <div class="container">
    <section class="about">
      <h2>ABOUT</h2>
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
import axios from 'axios'
export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
    'https://hayato_portfolio.microcms.io/api/v1/about',
       {
        headers: { 'X-API-KEY': 'c4c9d84e-ca69-4a71-a4d2-d56d6870d9f7' }
      }
    )
    return data
  }
}
</script>

<style lang="scss">
.container {
  padding-top: 120px;
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
.aboutContainer{
  width: $Sp-width;
  margin: 0 auto 160px auto;
  font-family: 'butler';
  text-align: left;
  .aboutTitle{
    border-bottom: 1px solid #000;
    margin-top: 40px;
    padding-bottom: 40px;
    &__age{
        font-size: 14px;
        margin-bottom: 8px;
    }
    &__name{
        font-size: 40px;
        margin-bottom: 8px;
    }
    &__profile{
        font-size: 16px;
    }
  }
  .aboutArea{
    margin-top: 20px;
    height: $Sp-width;
    width: $Sp-width;
    background: white;
  }
}
</style>
