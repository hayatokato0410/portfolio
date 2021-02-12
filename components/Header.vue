<template>
    <header class="header">
        <div class="logo">
            <nuxt-link to="/">HAYATO KATO</nuxt-link>
        </div>
        <nav class="globalNavigation">
            <nuxt-link to="/">menu</nuxt-link>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.header{
    position: fixed;
    font-family: 'Inter';
    width: $Sp-width;
    height: auto;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    .logo{
        margin-top: 20px;
        font-weight: 700;
        font-size: 12px;
    }
    .globalNavigation{
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        a{
            font-size: 12px;
            text-decoration: none;
            color: black;
        }
    }
}

</style>