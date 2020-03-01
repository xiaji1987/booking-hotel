<template>
  <div class="B_bookingHotelShow">
    <div class="B_booking_hotel_show">
      <div class="B_hotel_show_main">
        <router-link to="">
          <img src="@/assets/images/bookingImages/epidemic-situation.jpg" alt="疫情">
        </router-link>
      </div>
      <div class="B_hotel_show_sub">
        <div class="B_hotel_show_sub_two">
          <div class="B_hotel_show_hotel" v-for="(item, index) in locationMain" :key="index">
            <div class="B_hotel_show_bgc" :style="`background: url(${item.location_Img}) no-repeat center center; background-size: cover;`">
              <router-link to="">
                <div class="B_hotel_show_title">
                  <h3>
                    {{item.hotel_Location}}
                    <img src="@/assets/images/nationalFlag/china.png" alt="中国">
                  </h3>
                  <div class="B_hotel_down" @mouseenter="showInterest(index)" @mouseleave="closeInterest()" @click="closeHotel(index)">
                    <img src="@/assets/images/iconfont/sign-out.png" alt="退出">
                  </div>
                  <div class="B_hotel_interest" v-show="isShowInterestIndex === index">
                    <span>不感兴趣</span>
                  </div>
                  <p>{{item.hotel_Count}}家住宿</p>
                </div>
                <div class="B_hotel_show_price">
                  <span class="B_hotel_price_copy">均价</span>
                  <span class="B_hotel_price_value">{{item.hotel_Price}}元</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="B_hotel_show_sub_three">
          <div class="B_hotel_show_hotel B_hotel_show_three" v-for="(item, index) in locationSub" :key="index">
            <div class="B_hotel_show_bgc" :style="`background: url(${item.location_Img}) no-repeat center center; background-size: cover;`">
              <router-link to="">
                <div class="B_hotel_show_title">
                  <h3>
                    {{item.hotel_Location}}
                    <img src="@/assets/images/nationalFlag/china.png" alt="中国">
                  </h3>
                  <div class="B_hotel_down" @mouseenter="showSubInterest(index)" @mouseleave="closeSubInterest()" @click="closeSubHotel(index)">
                    <img src="@/assets/images/iconfont/sign-out.png" alt="退出">
                  </div>
                  <div class="B_hotel_interest" v-show="isShowSubInterestIndex === index">
                    <span>不感兴趣</span>
                  </div>
                  <p>{{item.hotel_Count}}家住宿</p>
                </div>
                <div class="B_hotel_show_price">
                  <span class="B_hotel_price_copy">均价</span>
                  <span class="B_hotel_price_value">{{item.hotel_Price}}元</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '../../utils/index'
export default {
  name: 'bookingHotelShow',
  data () {
    return {
      isShowInterestIndex: -1,
      isShowSubInterestIndex: -1,
      titleOpacity: 0.7,
      locationMain: [],
      locationSub: []
      // locationLen: 0
    }
  },
  mounted () {
    this.getLocation()
  },
  methods: {
    showInterest (index) {
      this.isShowInterestIndex = index
    },
    closeInterest () {
      this.isShowInterestIndex = -1
    },
    closeHotel (index) {
      console.log(index)
    },
    showSubInterest (index) {
      this.isShowSubInterestIndex = index
    },
    closeSubInterest () {
      this.isShowSubInterestIndex = -1
    },
    closeSubHotel (index) {
      console.log(index)
    },
    async getLocation () {
      const data = await get('/booking/location')
      if (data.code === 200) {
        this.locationMain = data.data.slice(0, 2)
        this.locationSub = data.data.slice(2, 5)
      }
    }
  }
}
</script>

<style scopeed lang="stylus">
.B_bookingHotelShow
  max-width 1110px
  padding 10px 5px 0 5px
  min-width 620px
  margin 0 auto
  .B_booking_hotel_show
    .B_hotel_show_main
      margin-bottom 24px
      img
        height 100%
        width 100%
    .B_hotel_show_sub
      margin-bottom 16px
      .B_hotel_show_sub_two, .B_hotel_show_sub_three
        padding-bottom 15px
        height 270px
        .B_hotel_show_hotel
          padding-left 15px
          float left
          width 50%
          box-sizing border-box
          height 272px
          cursor pointer
          .B_hotel_show_bgc
            height 100%
            border 1px solid #e9f0fa
            position relative
            .B_hotel_show_title
              background linear-gradient(to bottom,rgba(0,27,65,0.65) 0,rgba(0,27,65,0) 100%)
              width 100%
              padding 21px 15px 25px
              top 0
              left 0
              margin-bottom 12px
              position absolute
              color #ffffff
              text-shadow 1px 1px 1px #000
              box-sizing border-box
              cursor pointer
              font-size 16px
              img
                vertical-align middle
            .B_hotel_down
              position absolute
              top 10px
              right 8px
              cursor pointer
              padding 0 3px 3px
              box-sizing border-box
              img
                height 25px
                widows 25px
            .B_hotel_interest
              position absolute
              top 3px
              right -65px
              background-color #000000
              opacity 0.7
              color #ffffff
              font-size 14px
              width 75px
              height 35px
              line-height 35px
              text-align center
              z-index 9
          .B_hotel_show_price
            height 40px
            position absolute
            bottom 10px
            right 10px
            text-align right
            z-index 9
            color #ffffff
            background-color #000000
            padding 0 4px
            .B_hotel_price_copy
              font-size 12px
              line-height 15px
              padding-top 4px
              display block
            .B_hotel_price_value
              font-size 16px
              line-height 16px
        .B_hotel_show_three
          width 33.33333%
        .B_hotel_show_hotel:nth-child(1)
          padding-left 0
</style>
