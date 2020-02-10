<template>
  <div class="B_bookingRentCarSearch">
    <div class="B_booking_search">
      <div class="B_search_title">
        <div class="B_search_main_title">
          <span>不管哪种旅途，都有好车相伴</span>
        </div>
        <div class="B_search_sub_title">
          <span>比较大型租车公司的优惠车型</span>
        </div>
      </div>
      <div class="B_search_choice">
        <div class="B_search_radio" v-for="item in 2" :key="item" @click="chioceInput(item)">
          <div type="radio" :class="`B_search_radio_input ${item === chioceLocation ? 'B_search_radio_chioce' : ''}`"></div>
          <span class="B_search_redio_span">{{item === 1 ? '相同地点还车' : '不同地点还车'}}</span>
        </div>
      </div>
      <div class="B_search_input">
        <div class="B_search_rentCar_location">
          <div class="B_search_rentCar_all">
            <div class="B_search_rentCar_box">
              <div class="B_search_rentCar_img">
                <img src="@/assets/images/iconfont/car.png" alt="车">
              </div>
              <input type="text" placeholder="取车地点">
            </div>
            <div class="B_search_rentCar_box B_search_rentCar_line" v-show="chioceLocation === 2">
              <div class="B_search_rentCar_img">
                <img src="@/assets/images/iconfont/car.png" alt="车">
              </div>
              <input type="text" placeholder="还车地点">
            </div>
          </div>
        </div>
        <div class="B_search_rentCar_date">
          <div class="B_search_rent_date">
            <div class="B_search_date_img">
              <img src="@/assets/images/bookingImages/check-in-out.svg" alt="日历">
            </div>
            <span>2月10日星期一, 10:00</span>
          </div>
          <div class="B_search_rent_date">
            <div class="B_search_date_img">
              <img src="@/assets/images/bookingImages/check-in-out.svg" alt="日历">
            </div>
            <span>2月13日星期四, 10:00</span>
          </div>
        </div>
        <div class="B_search_rentCar_btn">
          <span>搜索</span>
        </div>
      </div>
      <div class="B_search_driver_age">
        <div class="B_search_driver_chioce" @click="clickDrAge()">
          <div :class="`B_search_driver_select ${clickAge === true ? 'B_search_driver_fill' : ''}`"></div>
          <span>司机年龄为30岁至65岁</span>
        </div>
        <input type="text" placeholder="年龄" v-show="clickAge === false">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingRentCarSearch',
  data () {
    return {
      chioceLocation: 1,
      clickAge: true
    }
  },
  methods: {
    chioceInput (item) {
      this.chioceLocation = item
    },
    clickDrAge () {
      this.clickAge = !this.clickAge
    }
  }
}
</script>

<style scoped lang="stylus">
.B_bookingRentCarSearch
  background-color #f7f7f7
  border-bottom 1px solid #ededed
  padding 24px 0 48px 0
  width 100%
  margin-bottom 16px
  .B_booking_search
    margin 0 auto
    max-width 1110px
    min-width 600px
    padding 44px 5px
    box-sizing border-box
    .B_search_title
      .B_search_main_title
        font-size 24px
        line-height 32px
        font-weight 600
      .B_search_sub_title
        font-size 14px
        line-height 20px
        font-weight 400
    .B_search_choice
      margin-top 15px
      .B_search_radio
        display inline-block
        vertical-align top
        margin 8px 16px 0 4px
        cursor pointer
        .B_search_radio_input
          display inline-block
          border-radius 50%
          height 15px
          width 15px
          border 2px solid rgba(0, 0 ,0, 0.5)
          background-color #ffffff
          vertical-align middle
        .B_search_redio_span
          vertical-align middle
          font-size 14px
          font-weight 400
        .B_search_radio_chioce
          border-color $common-color
          position relative
          &:after
            content ''
            position absolute
            left 3px
            top 3px
            width 9px
            height 9px
            border-radius 50%
            background-color $common-color
    .B_search_input
      box-shadow 0 2px 8px rgba(0, 0, 0, 0.15)
      color $font-color
      background-color $search-tab-bgc-color
      padding 4px
      border-radius 4px
      margin 24px 0 16px
      width 100%
      box-sizing border-box
      .B_search_rentCar_location
        display inline-block
        width 50%
        .B_search_rentCar_all
          display flex
          .B_search_rentCar_box
            flex 1
            background-color #fff
            .B_search_rentCar_img
              width 50px
              height 50px
              display inline-block
              position relative
              vertical-align middle
              img
                position absolute
                left 15px
                top 15px
                width 20px
                height 20px
            input
              display inline-block
              vertical-align middle
              color #aeaeae
              font-size 14px
              line-height 20px
              font-weight 500
              height 50px
          .B_search_rentCar_line
            border-left 1px solid #aeaeae
      .B_search_rentCar_date
        width 40%
        display inline-block
        vertical-align top
        box-sizing border-box
        height 50px
        .B_search_rent_date
          width 49%
          display inline-block
          background-color #fff
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          cursor pointer
          .B_search_date_img
            width 50px
            height 50px
            display inline-block
            position relative
            vertical-align middle
            img
              position absolute
              left 15px
              top 15px
              width 20px
              height 20px
          span
            font-size 14px
            font-weight 500
      .B_search_rentCar_btn
        vertical-align top
        display inline-block
        background-color $common-color
        width 9%
        border-radius 3px
        color #ffffff
        font-size 20px
        line-height 50px
        font-weight 500
        text-align center
        cursor pointer
    .B_search_driver_age
      padding 10px 0
      box-sizing border-box
      font-size 14px
      line-height 20px
      font-weight 400
      .B_search_driver_chioce
        display inline-block
        cursor pointer
        .B_search_driver_select
          display inline-block
          width 15px
          height 15px
          border 2px solid #aeaeae
          vertical-align middle
        .B_search_driver_fill
          background-color $common-color
        span
          vertical-align middle
      input
        display inline-block
        width 50px
        border 1px solid $common-color
</style>
