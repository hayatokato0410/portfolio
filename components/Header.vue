<template>
  <div>
    <nav class="globalNavigation">
        <div class="globalNavigation_inner">
            <div class="logo">
                <img src="" alt="">
                HAYATO KATO
            </div>
            <div class="menu">
                <nuxt-link to="/">WORKS</nuxt-link>
                <nuxt-link to="/works">ABOUT</nuxt-link>
                <nuxt-link to="/contact">CONTACT</nuxt-link>
            </div>
        </div>
    </nav>
    <Nuxt />
  </div>
</template>
<style lang="scss" scoped>
.globalNavigation {
 width: 100vw;
 height: auto;
 background: white;
}
 .globalNavigation_inner {
     width: calc(100vw - 40px);
     height: auto;
     margin: 0 auto ;
     padding-top: 20px;
     display: flex;
     justify-content: space-between;
 }
 .logo{
     width: 30vw;
     height: auto;
     font-size: 12px;
 }
 .menu{
     width: 50vw;
     height: auto;
     display: flex;
     justify-content: space-between;
     a{
         font-size: 12px;
         text-decoration: none;
         color: black;
     }
 }
</style>