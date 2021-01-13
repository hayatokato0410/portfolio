<template>
  <div>
    <nav class="globalNavigation">
        <div class="globalNavigation_inner">
            <div class="logo">
                <img src="" alt="">
                HAYATO KATO
            </div>
            <div class="menu">
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/works">Works</nuxt-link>
                <nuxt-link to="/contact">Contact</nuxt-link>
            </div>
        </div>
    </nav>
    <Nuxt />
  </div>
</template>
<style>
.globalNavigation {
 width: 100%;
 height: 50px;
 background: lightgray;
}
 .globalNavigation_inner {
     width: 80vw;
     height: 50px;
     margin: 0 auto;
     display: flex;
     justify-content: space-between;
 }
 .logo{
     width: 30vw;
     height: auto;
 }
 .menu{
     width: 20vw;
     height: auto;
     display: flex;
     justify-content: space-between;
     color: black;
 }
</style>