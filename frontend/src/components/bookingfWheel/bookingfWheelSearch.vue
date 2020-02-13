<template>
  <div class="B_bookingfWheelSearch">
    <div class="B_search_title">
      <h2>找我们就对了</h2>
    </div>
    <div class="B_search_detail">
      <ul class="B_search_detail_ul">
        <li class="B_search_detail_li" v-for="(item, index) in searchData" :key="index">
          <div class="B_search_detail_img">
            <img :src="item.imgSrc" alt="">
          </div>
          <div class="B_search_detail_content">
            <div class="B_search_detail_title">
              <span>{{item.detailTitle}}</span>
            </div>
            <div class="B_search_detail_sub">
              <span>{{item.detailSub}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingfWheelSearch',
  data () {
    return {
      searchData: [
        {
          imgSrc: require('@/assets/images/fWheelImg/digital.8f9fa9d1.svg'),
          detailTitle: '便捷又灵活',
          detailSub: '随时随地计划行程，获得即时确认和电子门票'
        },
        {
          imgSrc: require('@/assets/images/fWheelImg/reviews.f4a6e9e8.svg'),
          detailTitle: '便真实游客点评',
          detailSub: '探索玩乐精华，参考真人评论'
        },
        {
          imgSrc: require('@/assets/images/fWheelImg/support.0d3a9e10.svg'),
          detailTitle: '贴心客服支持',
          detailSub: 'Booking.com客服团队全天候提供帮助'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.B_bookingfWheelSearch
  margin 0 auto 32px
  max-width 1152px
  min-width 620px
  .B_search_title
    margin 32px 0 16px 0
  .B_search_detail
    border-bottom 1px solid #000
    .B_search_detail_ul
      margin-bottom 32px
      display flex
      .B_search_detail_li
        flex 1
        margin 0 16px 8px 0
        .B_search_detail_img
          vertical-align top
          display inline-block
          margin 0 12px 0 0
          img
            width 32px
            height 32px
        .B_search_detail_content
          display inline-block
          width 301px
          .B_search_detail_title
            margin-bottom 4px
            font-weight 700
            font-size 16px
            line-height 22px
            color #000
          .B_search_detail_sub
            font-size 16px
            line-height 22px
            font-weight normal
            color #000000
</style>
