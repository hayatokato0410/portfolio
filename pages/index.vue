<template>
  <main class="container">
    <section class="firstview">
      <h1>
          <p class="fadeAnimation">HAYATO KATO</p>
      </h1>
      <p class="profile">
        I am a web designer and developer. I work in Tokyo. I also take and edit photos and videos. My goal is to build a better society through the power of design.
      </p>
      <div class="circle">
      <img src="~/assets/image/circle.svg">
      </div>
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
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    return data
  },
    mounted: function() {
    var $allMsg = $('.fadeAnimation');
    var $wordList = $('.fadeAnimation').html().split("");
    $('.fadeAnimation').html("");
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ 'opacity': 0 });
        newEL.appendTo($allMsg);
        newEL.delay(idx * 100);
        newEL.animate({ 'opacity': 1 }, 2000);
    });
  }
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
      font-size: 16px;
      border-bottom: 1px solid white;
      padding-bottom: 28px;
      color: white;
    }
}
.firstview{
  min-height: 80vh;
  width: $Sp-width;
  margin: 0 auto;
  font-family: 'butler';
  letter-spacing: 0.02em;
  h1 {
    padding-top: 12vh;
    font-size: 52px;
    p{
    }
  }
  .profile{
    width: 60vw;
    margin-top: 20px;
    line-height: 1.5;
    font-size: 14px;
    opacity: 0.5;
  }
  .circle{
    position: fixed;
    bottom: 20px;
    right: 20px;
    mix-blend-mode:difference;
    animation: rotate_right 8s linear infinite;
    @keyframes rotate_right {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    img{
      width: 100px;
      height: auto;
    }
  }
}
.work{
  background: #333;
  padding-top: 40px;
  padding-bottom: 40px;
  .work_inner{
    width: $Sp-width;
    margin: 0 auto;
  }
}
.contact{
    padding-top: 60px;
    width: $Sp-width;
    margin: 0 auto 20px auto;
    font-family: 'butler';
    text-align: left;
  h2{
      color: #333;
      border-bottom: 1px solid #333;
    }
  ul{
    li{
      font-size: 32px;
      border-bottom: 1px solid #000;
      margin-top: 32px;
      padding-bottom: 28px;
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