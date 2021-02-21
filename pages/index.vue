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
    <section class="contact">
      <h2>CONTACT</h2>
      <div class="contact_inner">
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
      font-size: 14px;
      border-bottom: 1px solid white;
      padding-bottom: 16px;
      color: white;
    }
}
.firstview{
  height: 80vh;
  width: $Sp-width;
  margin: 0 auto;
  font-family: 'butler';
  letter-spacing: 0.05em;
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
  padding-top: 60px;
  .work_inner{
    width: $Sp-width;
    margin: 0 auto 160px auto;
  }
}
.contact{
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