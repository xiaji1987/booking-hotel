<template>
  <div class="B_bookingRentCarInfo">
    <div class="B_rentCar_info">
      <div class="B_rentCar_info_title">
        <div class="B_rentCar_info_main_title">
          <span>全球规模最大的在线租车服务之一</span>
        </div>
        <div class="B_rentCar_info_sub_title">
          <span>让我们帮您在出行目的地找到合适的车辆吧！</span>
        </div>
      </div>
      <div class="B_rentCar_info_content">
        <ul class="B_rentCar_info_ul">
          <li class="B_rentCar_info_li" v-for="(item, index) in rentInfo" :key="index">
            <div class="B_rentCar_info_img">
              <img :src="item.imgSrc" alt="">
            </div>
            <div class="B_rentCar_info_notes">
              <span>{{item.rentCarNum}}</span>
              <span>{{item.rentCarPlace}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingRentCarInfo',
  data () {
    return {
      rentInfo: [
        {
          imgSrc: require('@/assets/images/iconfont/earth.png'),
          rentCarNum: '6000+个',
          rentCarPlace: '租车点'
        },
        {
          imgSrc: require('@/assets/images/iconfont/country.png'),
          rentCarNum: '160个',
          rentCarPlace: '国家'
        },
        {
          imgSrc: require('@/assets/images/iconfont/language.png'),
          rentCarNum: '43种',
          rentCarPlace: '语言'
        },
        {
          imgSrc: require('@/assets/images/iconfont/star.png'),
          rentCarNum: '3500000条',
          rentCarPlace: '住客点评'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.B_bookingRentCarInfo
  margin 32px 0 32px 0
  background-color #ffedd9
  padding 24px 0 48px 0
  width 100%
  .B_rentCar_info
    margin 0 auto
    max-width 1100px
    .B_rentCar_info_title
      margin-bottom 24px
      box-sizing border-box
      .B_rentCar_info_main_title
        font-size 24px
        line-height 32px
        font-weight 600
        color #000000
        margin 0 0 12px
        padding-top 36px
      .B_rentCar_info_sub_title
        font-size 14px
        color #000000
        font-weight 400
        line-height 14px
    .B_rentCar_info_content
      .B_rentCar_info_ul
        display flex
        .B_rentCar_info_li
          flex 1
          padding 0 16px 0 0
          box-sizing border-box
          .B_rentCar_info_img
            display inline-block
            vertical-align top
            margin 8px 0 0 4px
            img
              width 48px
              height 48px
          .B_rentCar_info_notes
            display inline-block
            vertical-align top
            margin 8px 0 0 4px
            span
              display block
              &:first-child
                font-weight bold
                font-size 16px
</style>
