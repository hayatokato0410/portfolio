<template>
  <div class="container">
    <div class="top">
      <p>HAYATO</p>
      <p>KATO</p>
    </div>
    <section class="Works">
      <SectionTitle />
      <div class="WorksCards">
          <Card />
          <Card />
          <Card />
      </div>
    </section>
    <section class="About">
      <SectionTitle />
      <div class="WorksCards">
          <Card />
      </div>
    </section>
  </div>
</template>

<script>
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
