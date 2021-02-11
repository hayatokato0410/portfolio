<template>
<div class="SectionTitle">
    <p>WORKS</p>
</div>
</template>

<script>
export default {
  name: 'SectionTitle', // ここは外部をコンポーネントとして呼ぶ名前になる
}
</script>

<style lang="scss" scoped>
.SectionTitle{
    width: $Sp-width;
    height: auto;
    margin: 0 auto;
    border-bottom: 1px solid #000;
    padding-bottom: 20px;
    p{
        font-family: Inter;
        font-weight: 700;
        text-align: left;
        font-size: 12px;
    }
}
</style>
