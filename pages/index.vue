<template>
  <main class="container">
    <section class="firstview">
      <h1>
        <p><span class="textFadeIn">HAYATO</span></p>
        <p><span class="textFadeIn">KATO</span></p>
      </h1>
      <p class="profile">
        I am a web designer and developer. I work in Tokyo. I also take and edit photos and videos. My goal is to build a better society through the power of design.
      </p>
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
  </main>
</template>

<script>
import axios from 'axios'
export default {
async asyncData() {
    const { data } = await axios.get(
    'https://hayato_portfolio.microcms.io/api/v1/works',
       {
        headers: { 'X-API-KEY': (process.env.API_KEY) }
      }
    )
    return data
  },
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
      font-weight: 700;
      text-align: left;
      font-size: 12px;
      border-bottom: 1px solid white;
      padding-bottom: 16px;
      color: white;
    }
}
.firstview{
  height: 100vh;
  width: $Sp-width;
  margin: 0 auto;
  font-family: 'butler';
  h1 {
    font-size: 52px
  }
  .profile{
    width: 60vw;
    margin-top: 20px;
    line-height: 1.5;
    font-size: 14px;
    opacity: 0.5;
  }
}
.work{
  background: #333;
  padding-top: 40px;
  .work_inner{
    width: $Sp-width;
    margin: 0 auto 160px auto;
  }
}
</style>