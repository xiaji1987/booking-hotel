<template>
  <div class="B_booking_search">
    <div class="B_search_main">
      <div class="B_search_title">
        <div class="B_search_main_search">
          <span>酒店、民宿、度假屋……更多住宿优惠搜不停</span>
        </div>
        <div class="B_search_sub_search">
          <span>从舒适的乡村民宿到时髦的都市公寓</span>
        </div>
      </div>
      <div class="B_search_bar">
        <div class="B_search_bar_div B_search_location">
          <input type="text" placeholder="目的地?">
        </div>
        <div class="B_search_bar_div B_search_check_in_out">
          <span>入住   —   退房</span>
        </div>
        <div class="B_search_bar_div B_search_member">
          <span>2位成员 · 无儿童 · 1间客房</span>
        </div>
        <div class="B_search_bar_div B_search_button">
          <span>搜索</span>
        </div>
      </div>
      <div class="B_search_business">
        <input type="checkbox">
        <span>我要出差</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingSearch'
}
</script>

<style scoped lang="stylus">
.B_booking_search
  background-color $search-base-color
  margin-bottom 24px
  border-bottom 1px solid #ededed
  .B_search_main
    padding 44px 5px
    position relative
    max-width 1100px
    margin 0 auto
    box-sizing border-box
    .B_search_title
      .B_search_main_search
        color $font-color
        font-size 24px
        line-height 32px
        font-weight 600
      .B_search_sub_search
        color $font-color
        font-size 14px
        line-height 20px
        font-weight 400
    .B_search_bar
      background-color $search-tab-bgc-color
      padding 4px
      border-radius 4px
      margin 24px 0 16px
      box-sizing border-box
      width 100%
      .B_search_bar_div
        white-space nowrap
        width auto
        display inline-block
        vertical-align middle
        font-size 14px
        line-height 20px
        font-weight 500
        color $font-color
        height 52px
        border-radius 2px
        background-color #fff
        input
          background-image url(../../assets/images/bookingImages/location.svg)
          background-repeat no-repeat
          background-size 20px
          background-position 16px center
          text-indent 50px
          height 52px
          width 566px
      .B_search_check_in_out
        background-image url(../../assets/images/bookingImages/check-in-out.svg)
        background-repeat no-repeat
        background-size 20px
        background-position 16px center
        padding-left 50px
        cursor pointer
        span
          display block
          padding 16px 16px 0 0
      .B_search_member
        background-image url(../../assets/images/bookingImages/member-up-down.svg), url(../../assets/images/bookingImages/member.svg)
        background-position top 50% right 16px, top 50% left 16px
        background-repeat no-repeat
        background-size 10px, 15px
        padding 0 40px 0 46px
        cursor pointer
        span
          display block
          padding-top 16px
      .B_search_button
        background-color #0077CF
        width 104px
        color #ffffff
        font-size 20px
        cursor pointer
        span
          display block
          padding 16px 32px
    .B_search_business
      input
        border 2px solid #bdbdbd
        height 20px
        width 20px
        vertical-align middle
      span
        font-size 14px
        font-weight 400
        display inline-block
        vertical-align middle
</style>
