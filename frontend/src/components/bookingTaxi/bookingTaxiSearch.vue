<template>
  <div class="B_bookingTaxiSearch">
    <div class="B_taxi_bgc">
      <div class="B_taxi_search">
        <div class="B_search_title">
          <h1>预订机场出租车</h1>
          <h4>机场接送轻松往返住宿</h4>
        </div>
        <div class="B_search_checkBox">
          <div class="B_search_list" v-for="item in 2" :key="item" @click="searchListClick(item)">
            <div :class="`B_search_garden ${taxiClick === item ? 'B_search_click' : ''}`"></div>
            <span>{{item === 1 ? '单程' : '往返'}}</span>
          </div>
        </div>
        <div class="B_search_content">
          <div class="B_search_content_list B_search_content_get">
            <div class="B_search_content_img">
              <img src="@/assets/images/bookingImages/map.svg" alt="">
            </div>
            <input type="text" placeholder="上车地点（机场、酒店、火车站、街道地址...">
          </div>
          <div class="B_search_content_list B_search_content_down">
            <div class="B_search_content_img">
              <img src="@/assets/images/bookingImages/map.svg" alt="">
            </div>
            <input type="text" placeholder="下车地点（机场、酒店、火车站、街道地址...">
          </div>
          <div class="B_search_content_list B_search_content_date">
            <div class="B_search_content_img">
              <img src="@/assets/images/bookingImages/check-in-out.svg" alt="">
            </div>
            <span>13/02/2020</span>
          </div>
          <div class="B_search_content_list B_search_content_time">
            <div class="B_search_content_img">
              <img src="@/assets/images/bookingImages/clock.svg" alt="">
            </div>
            <span>12:00</span>
          </div>
          <div class="B_search_content_list B_search_content_num">
            <div class="B_search_content_img">
              <img src="@/assets/images/bookingImages/member.svg" alt="">
            </div>
            <span>1</span>
            <div class="B_search_content_img">
              <img src="@/assets/images/bookingImages/member-up-down.svg" alt="">
            </div>
          </div>
          <div class="B_search_content_list B_search_content_btn">
            <span>搜索</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingTaxiSearch',
  data () {
    return {
      taxiClick: 1
    }
  },
  methods: {
    searchListClick (item) {
      this.taxiClick = item
    }
  }
}
</script>

<style scoped lang="stylus">
.B_bookingTaxiSearch
  background-image url(../../assets/images/taxiImg/54218898.jpg)
  background-position 0 -42px
  background-repeat no-repeat
  background-size cover
  width 100%
  height 507px
  position relative
  .B_taxi_bgc
    width 100%
    height 100%
    background-color rgba(0, 53, 128, 0.5)
    .B_taxi_search
      width 1100px
      position absolute
      left 50%
      top 50%
      transform translate(-50%, -50%)
      .B_search_title
        color #ffffff
      .B_search_checkBox
        color #ffffff
        margin 24px 0 24px 0
        .B_search_list
          display inline-block
          margin-right 10px
          cursor pointer
          .B_search_garden
            display inline-block
            width 16px
            height 16px
            border 2px solid #707070
            vertical-align middle
            border-radius 50%
            background-color #fff
            margin-right 3px
          span
            vertical-align middle
          .B_search_click
            position relative
            border-color $common-color
            &::after
              content ''
              position absolute
              left 2px
              top 2px
              width 12px
              height 12px
              border-radius 50%
              background-color $common-color
      .B_search_content
        background-color $search-tab-bgc-color
        padding 4px
        border-radius 4px
        box-sizing border-box
        display flex
        .B_search_content_list
          background-color #fff
          border-radius 4px
          margin-right 4px
          padding-right 10px
          cursor pointer
          .B_search_content_img
            width 48px
            height 54px
            display inline-block
            position relative
            vertical-align top
            img
              position absolute
              left 14px
              top 17px
              width 20px
              height 20px
          input
            vertical-align top
            display inline-block
            height 54px
            color #383838
            font-size 14px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            font-weight bold
          span
            line-height 54px
        .B_search_content_get
          flex 1
        .B_search_content_down
         flex 1
        .B_search_content_date
          padding-right 30px
        .B_search_content_time
          padding-right 20px
        .B_search_content_btn
          background-color $common-color
          width 133px
          color #ffffff
          text-align center
          font-size 16px
          font-weight bold
</style>
