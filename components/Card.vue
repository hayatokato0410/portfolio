<template>
<div class="CardBox">
    <CardTitle />
    <div class="WorkImage">
        <span></span>
    </div>
</div>
</template>

<script>

export default {
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
        height: $Sp-width;
        width: $Sp-width;
        margin: 0 auto;
        background: white;
  }
}

</style>
