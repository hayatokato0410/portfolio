<template>
<div class="CardBox">
    <CardTitle />
    <div class="WorkImage">
        <span></span>
    </div>
</div>
</template>

<script>
import CardTitle from '~/components/CardTitle.vue'  // 原子をimport

export default {
  name: 'Card', // この分子の外部を呼ぶ際の名前

  components: {
    CardTitle // 原子をcomponentとして使う宣言
  }
}
</script>

<style lang="scss" scoped>
.CardBox{
    border-bottom: 1px solid #000;
    padding-bottom: 60px;
    width: $Sp-width;
    height: auto;
    margin: 0 auto;

    .WorkImage{
        height: 380px;
        width: $Sp-width;
        margin: 0 auto;
        background: white;
  }
}

</style>
