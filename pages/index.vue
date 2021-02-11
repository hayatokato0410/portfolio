<template>
  <div class="container">
    <div class="top"><span></span></div>
    <div class="Works">
      <SectionTitle />
      <div class="WorksCards">
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
  width: 100vw;
}
</style>
