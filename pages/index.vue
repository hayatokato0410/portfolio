<template>
  <main class="container">
    <div class="main">
      <h1>
        <p><span class="textFadeIn">HAYATO</span></p>
        <p><span class="textFadeIn">KATO</span></p>
      </h1>
    </div>
    <section class="works">
      <SectionTitle />
      <div class="WorksCards">
          <Card />
          <Card />
          <Card />
      </div>
    </section>
    <section class="about">
      <SectionTitle />
      <div class="worksCards">
        <Card />
      </div>
    </section>
  </main>
</template>

<script>
import {TweenMax} from "gsap";
export default {
   mounted () {
       TweenMax.to('.textFadeIn', 0.8,{y: '30%', ease: "power3.out"});
   }
};
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
}
.main{
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
section{
  margin-top: 160px;
}
</style>