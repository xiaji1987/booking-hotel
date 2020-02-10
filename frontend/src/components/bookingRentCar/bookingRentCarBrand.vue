<template>
  <div class="B_bookingRentCarBrand">
    <ul class="B_rentCar_brand_ul">
      <li class="B_rentCar_brand_li" v-for="(item ,index) in brandData" :key="index">
        <img :src="item.brandImgSrc" alt="租车商标">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'bookingRentCarBrand',
  data () {
    return {
      brandData: [
        {
          brandImgSrc: require('@/assets/images/rentCarBrand/europcar_logo_lrg.gif')
        },
        {
          brandImgSrc: require('@/assets/images/rentCarBrand/alamo_logo_lrg.gif')
        },
        {
          brandImgSrc: require('@/assets/images/rentCarBrand/sixt_logo_lrg.gif')
        },
        {
          brandImgSrc: require('@/assets/images/rentCarBrand/avis_logo_lrg.gif')
        },
        {
          brandImgSrc: require('@/assets/images/rentCarBrand/enterprise_logo_lrg.gif')
        },
        {
          brandImgSrc: require('@/assets/images/rentCarBrand/dollar_logo_lrg.gif')
        },
        {
          brandImgSrc: require('@/assets/images/rentCarBrand/thrifty_logo_lrg.gif')
        },
        {
          brandImgSrc: require('@/assets/images/rentCarBrand/sicily_by_car_logo_lrg.gif')
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.B_bookingRentCarBrand
  max-width 1094px
  min-width 620px
  margin 0 auto
  margin-bottom 16px
  .B_rentCar_brand_ul
    width 100%
    display flex
    .B_rentCar_brand_li
      flex 1
      img
        width 80px
        height 40px
</style>
