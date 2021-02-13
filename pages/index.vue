<template>
  <main class="container">
    <div class="top">
      <p>HAYATO</p>
      <p>KATO</p>
    </div>
    <section class="works" id="fade">
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
TweenMax.fromTo('.top',1,{opacity:'0%'},{opacity:'100%'});
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
.top{
  height: 100vh;
  width: $Sp-width;
  margin: 0 auto;
  padding-top: 30vh;
  p{
    font-family: 'butler';
    font-size: 60px;
  }
}
section{
  margin-top: 160px;
}
</style>
