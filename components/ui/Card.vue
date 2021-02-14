<template>
    <div class="container">
        <div class="workTitle" v-for="content in contents" :key="content.id">
            <nuxt-link :to="`/${content.id}`">
                <h3><div class="workTitle__number">{{ content.number }}</div></h3>
                <div class="workTitle__title">{{ content.title }}</div>
                <!-- <div class="workTitle__category">{{ content.category }}</div> -->
            </nuxt-link>
          </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
    'https://hayato_portfolio.microcms.io/api/v1/works',
       {
        headers: { 'X-API-KEY': 'c4c9d84e-ca69-4a71-a4d2-d56d6870d9f7' }
      }
    )
    return data
  }
}
</script>

<style lang="scss" scoped>
// .container {
//   margin: 0 auto;
//   min-height: 100vh;
//   height: auto;
//   display: block;
// }
// .main{
//   height: 100vh;
//   width: $Sp-width;
//   margin: 0 auto;
//   padding-top: 30vh;
//   h1 p{
//     font-family: 'butler';
//     font-size: 60px;
//     // background-color: gray;
//     overflow: hidden;
//     span{
//       display: inline-block;
//       transform: translateY(100%);
//    }
//   }
// }
// .work{
//   width: $Sp-width;
//   margin: 24px auto 20px auto;
//   font-family: 'butler';
//   text-align: left;
//   border-bottom: 1px solid #000;
//   padding-bottom: 60px;
//   .workTitle{
//     &__number{
//         font-size: 14px;
//         margin-bottom: 6px;
//     }
//     &__title{
//         font-size: 40px;
//     }
//     &__category{
//         font-size: 16px;
//     }
//   }
// }

</style>
