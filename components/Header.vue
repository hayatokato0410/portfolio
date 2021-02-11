<template>
  <div>
    <nav class="globalNavigation">
        <div class="globalNavigation_inner">
            <div class="logo">
                <nuxt-link to="/">HAYATO KATO</nuxt-link>
            </div>
            <div class="menu">
                <nuxt-link to="/works">WORKS</nuxt-link>
                <nuxt-link to="/about">ABOUT</nuxt-link>
                <nuxt-link to="/contact">CONTACT</nuxt-link>
            </div>
        </div>
    </nav>
    <Nuxt />
  </div>
</template>
<style lang="scss" scoped>
.globalNavigation {
font-family: 'Inter';
 width: 100vw;
 height: auto;
}
 .globalNavigation_inner {
     width: $Sp-width;
     height: auto;
     margin: 0 auto ;
     padding-top: 20px;
     display: flex;
     justify-content: space-between;
 }
 .logo{
     font-weight: 700;
     width: 30vw;
     height: auto;
     font-size: 12px;
 }
 .menu{
     font-weight: 500;
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