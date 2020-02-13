<template>
  <div class="B_bookingfWheelLocation">
    <div class="B_location_title">
      <h2>热门目的地</h2>
    </div>
    <div class="B_location_list">
      <ul class="B_location_ul">
        <li class="B_location_li" v-for="(item, index) in locationData" :key="index">
          <router-link to="">
            <div class="B_location_img">
              <img :src="item.imgSrc" :alt="item.locationName">
            </div>
            <div class="B_location_content">
              <div class="B_location_content_title">
                <span>{{item.locationName}}</span>
              </div>
              <div class="B_location_content_num">
                <span>{{item.locationNum}}项</span>
                <img src="@/assets/images/iconfont/right-arrow.png" alt="">
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingfWheelLocation',
  data () {
    return {
      locationData: [
        {
          imgSrc: require('@/assets/images/fWheelImg/71365537.jpg'),
          locationName: '阿姆斯特丹',
          locationNum: 36
        },
        {
          imgSrc: require('@/assets/images/fWheelImg/72203988.jpg'),
          locationName: '罗马',
          locationNum: 51
        },
        {
          imgSrc: require('@/assets/images/fWheelImg/72204347.jpg'),
          locationName: '巴黎',
          locationNum: 56
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.B_bookingfWheelLocation
  max-width 1152px
  min-width 620px
  margin 0 auto 40px
  .B_location_title
    margin 32px 0 16px 0
  .B_location_list
    .B_location_ul
      overflow hidden
      margin-left -10px
      .B_location_li
        float left
        padding  0 8px 16px 8px
        box-sizing border-box
        width 33.3%
        position relative
        &:hover
          img
            transform scale(1.1)
        .B_location_img
          overflow hidden
          img
            width 100%
            height 207px
            transition transform 0.3s ease
        .B_location_content
          position absolute
          left 50%
          top 50%
          transform translate(-50%, -50%)
          text-align center
          width 100%
          .B_location_content_title
            color #fff
            font-weight bold
            line-height 1
            font-size 38px
            text-shadow rgba(0, 0, 0, 0.5) 0 2px 4px
          .B_location_content_num
            font-size 16px
            line-height 22px
            color #ffffff
            img
              display inline-block
              width 22px
              height 22px
              vertical-align middle
</style>
