<template>
<div class="WorksTitle">
    <div class="WorksTitle__number"><p>01</p></div>
    <div class="WorksTitle__title"><p>HINOKI.media</p></div>
    <div class="WorksTitle__category"><p>Design</p></div>
</div>
</template>

<script>
export default {
  name: 'CardTitle', // ここは外部をコンポーネントとして呼ぶ名前になる
}
</script>

<style lang="scss" scoped>
.WorksTitle{
    width: $Sp-width;
    margin: 36px auto 20px auto;
    font-family: 'butler';
    text-align: left;
    &__number{
        font-size: 12px;
        margin-bottom: 4px;
    }
    &__title{
        font-size: 40px;
        margin-bottom: 4px;
    }
    &__category{
        font-size: 12px;
    }
}

</style>
