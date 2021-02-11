<template>
  <div class="container">
    <div class="top">
      <p>HAYATO</p>
      <p>KATO</p>
    </div>
    <div class="Works">
      <SectionTitle />
      <div class="WorksCards">
          <Card />
          <Card />
          <Card />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card'
import SectionTitle from '~/components/SectionTitle'
export default {
  components: {
    Card,
    SectionTitle
  },
}
</script>

<style lang="scss" scoped>
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
  padding-top: 20vh;
  p{
    font-family: 'butler';
    font-size: 60px;
  }
}
</style>
