<template>
  <ul class="workContainer">
    <li class="workTitle">
      <nuxt-link :to="`/`">
        <div class="workTitle_wrapper">
          <div class="workTitle_title">{{ title }}</div>
          <div class="workTitle_number">{{ number }}</div>
        </div>
        <div class="workTitle_category">{{ category }}</div>
        <img class="thumbnail">
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
import axios from 'axios'
export default {
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
    margin-top: 28px;
    border-bottom: 1px solid $Bg-color;
    padding-bottom: 40px;
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
        font-family: 'butler-Light';
    }
    &_title{
        letter-spacing: 0.025em;
        font-size: 40px;
        margin-bottom: 8px;
    }
    &_category{
      color: $Bg-color;
      mix-blend-mode:difference;
      font-family: 'butler-Light';
      font-size: 16px;
      letter-spacing: 0.02em;
    }
    & img{
      margin-top: 30px;
      width: $Sp-width;
      height: 60vh;
      background: white;
    }
  }
}
</style>
