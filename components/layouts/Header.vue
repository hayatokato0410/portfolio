<template>
    <header class="header">
        <div class="logo">
            <nuxt-link to="/">HAYATO KATO</nuxt-link>
        </div>
        <nav class="globalNavigation">
            <nuxt-link to="/">WORK</nuxt-link>
            <nuxt-link to="/about">ABOUT</nuxt-link>
        </nav>
    </header>
</template>
<script>
import axios from 'axios'
export default {
async asyncData() {
    const { data } = await axios.get(
    'https://hayato_portfolio.microcms.io/api/v1/works',
       {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    return data
  },
}
</script>
<style lang="scss" scoped>
.header{
    mix-blend-mode:difference;
    position: fixed;
    font-family: 'Inter';
    width: $Sp-width;
    height: auto;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    color: white;
    .logo{
        margin-top: 20px;
        font-weight: 500;
        font-size: 12px;
    }
    .globalNavigation{
        padding-top: 20px;
        width: 28vw;
        height:auto;
        display: flex;
        justify-content: space-between;
        a{
            font-size: 12px;
            text-decoration: none;
        }
    }
}

</style>