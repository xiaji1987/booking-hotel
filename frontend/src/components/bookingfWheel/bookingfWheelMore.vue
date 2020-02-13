<template>
  <div class="B_bookingfWheelMore">
    <div class="B_more_title">
      <h2>探索更多目的地</h2>
    </div>
    <div class="B_more_list">
      <ul class="B_more_ul">
        <li class="B_more_li" v-for="(item, index) in moreData" :key="index">
          <router-link to="">
            <div class="B_more_img">
              <img :src="item.imgSrc" :alt="item.moreName">
            </div>
            <div class="B_more_content">
              <div class="B_more_content_title">
                <span>{{item.moreName}}</span>
              </div>
              <div class="B_more_content_num">
                <span>{{item.moreNum}}项</span>
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
  name: 'bookingfWheelMore',
  data () {
    return {
      moreData: [
        {
          imgSrc: require('@/assets/images/fWheelImg/71365537.jpg'),
          moreName: '阿姆斯特丹',
          moreNum: 36
        },
        {
          imgSrc: require('@/assets/images/fWheelImg/72203988.jpg'),
          moreName: '罗马',
          moreNum: 51
        },
        {
          imgSrc: require('@/assets/images/fWheelImg/72204347.jpg'),
          moreName: '巴黎',
          moreNum: 56
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.B_bookingfWheelMore
  max-width 1152px
  min-width 620px
  margin 0 auto 40px
  .B_more_title
    margin 32px 0 16px 0
  .B_more_list
    .B_more_ul
      overflow hidden
      margin-left -10px
      .B_more_li
        float left
        padding  0 8px 16px 8px
        box-sizing border-box
        width 33.3%
        position relative
        &:hover
          img
            transform scale(1.1)
        .B_more_img
          overflow hidden
          img
            width 100%
            height 207px
            transition transform 0.3s ease
        .B_more_content
          position absolute
          left 50%
          top 50%
          transform translate(-50%, -50%)
          text-align center
          width 100%
          .B_more_content_title
            color #fff
            font-weight bold
            line-height 1
            font-size 38px
            text-shadow rgba(0, 0, 0, 0.5) 0 2px 4px
          .B_more_content_num
            font-size 16px
            line-height 22px
            color #ffffff
            img
              display inline-block
              width 22px
              height 22px
              vertical-align middle
</style>
