<template>
    <header class="header _show">
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
    mounted: function() {
    var pos = 0;
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 0.1 ){
        if($(this).scrollTop() < pos ){
            //上スクロール時に表示
            $('.header').addClass('_show');
        }else{
            //下スクロール時に表示
            $('.header').removeClass('_show');
        }
        } else {
        $('.header').addClass('_show');
        }
        //スクロールが停止した位置を保持
        pos = $(this).scrollTop();
    });
  }
}
</script>
<style lang="scss" scoped>
.header{
    z-index: 10;
    position: fixed;
    font-family: 'Inter';
    width: 100vw;
    height: auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    top: -100px;
    left: 0;
    transition: 0.3s ease-in-out;
    color: white;
    mix-blend-mode: difference;
    border-bottom: solid 1px white;
    backdrop-filter: blur(12px);
    &._show{
        position: fixed;
        top:0;
        left: 0;
    }
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
        .ellipse{
            img{
                width: 50px;
                margin-top: -30px;
            }
        }
    }
}

</style>