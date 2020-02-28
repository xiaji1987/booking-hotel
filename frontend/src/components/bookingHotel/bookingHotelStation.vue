<template>
  <div class="B_bookingHotelStation">
    <div class="B_station_title">
      <h2>精彩下一站，灵感这里找</h2>
    </div>
    <div class="B_station_images_show">
      <div class="B_station_three_img">
        <div class="B_station_img" v-for="(item, index) in hotelMainStation" :key="index">
          <div class="B_station_img_src">
            <img :src="item.hotel_station_ImgSrc" alt="station图片">
          </div>
          <div class="B_station_content">
            <div class="B_station_img_title">{{item.hotel_station_Title}}</div>
            <div class="B_station_img_detail">{{item.hotel_station_Detail}}</div>
          </div>
        </div>
      </div>
      <div class="B_station_two_img">
        <div class="B_station_img B_station_img_two" v-for="(item, index) in hotelSubStation" :key="index">
          <div class="B_station_img_src">
            <img :src="item.hotel_station_ImgSrc" alt="station图片">
          </div>
          <div class="B_station_content">
            <div class="B_station_img_title">
              <span>{{item.hotel_station_Title}}</span>
            </div>
            <div class="B_station_img_detail">
              <span>{{item.hotel_station_Detail}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingHotelStation',
  data () {
    return {
      hotelMainStation: [],
      hotelSubStation: []
    }
  },
  created () {
    this.$http({
      method: 'get',
      baseURL: 'hotelStation'
    }).then(res => {
      // console.log(res)
      if (res.data.code === 200) {
        this.hotelMainStation = res.data.data.slice(0, 3)
        this.hotelSubStation = res.data.data.slice(3, 5)
      } else {
        console.log(res.data.msg)
      }
    })
  }
}
</script>

<style scopde lang="stylus">
.B_bookingHotelStation
  max-width 1110px
  padding 10px 5px 0 5px
  min-width 620px
  margin 0 auto
  .B_station_title
    margin-bottom 16px
  .B_station_images_show
    .B_station_img
      margin-right 15px
      margin-bottom 15px
      font-weight bold
      width 31.9%
      display inline-block
      color #fff
      height 320px
      text-shadow 0 1px 2px rgba(0,0,0,0.20)
      border-radius 3px
      position relative
      overflow hidden
      .B_station_img_src
        width 100%
        height 100%
        transition transform 0.5s ease
        img
          width 100%
          height 100%
      .B_station_img_src:hover
        transform scale(1.07)
      .B_station_content
        position absolute
        bottom 0
        left 0
        padding 10px 10px 15px
        width 100%
        box-sizing border-box
        background-image linear-gradient(-180deg,rgba(0,0,0,0.00) 12%,#000 97%)
        .B_station_img_title
          font-size 20px
          line-height 28px
          font-weight 700
        .B_station_img_detail
          font-size 14px
          line-height 20px
          font-weight 500
          margin 5px 0
    .B_station_img_two
      width 48.6%
</style>
