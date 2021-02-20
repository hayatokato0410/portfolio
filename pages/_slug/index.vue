<template>
  <main class="main">
    <p class="number">{{ number }}</p>
    <h3 class="title">{{ title }}</h3>
    <!-- <p class="category">{{　category　}}</p> -->
    <div class="post">{{ content }}</div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://hayato_portfolio.microcms.io/api/v1/works/${params.slug}`,
      {
        headers: { 'X-API-KEY': 'c4c9d84e-ca69-4a71-a4d2-d56d6870d9f7' }
      }
    )
    return data
  }
}
</script>
<style lang="scss" scoped>
main{
    height: 100vh;
    width: auto;
    padding-top: 100px;
}
</style>