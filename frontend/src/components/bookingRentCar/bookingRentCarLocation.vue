<template>
  <div class="B_bookingRentCarLocation">
    <div class="B_location_title">
      <h3>全球热门租车目的地</h3>
    </div>
    <div class="B_location_content">
      <ul class="B_location_content_ul">
        <li class="B_location_content_li" v-for="(item, index) in locationData" :key="index">
          <router-link to="">
            <div class="B_location_content_notes">
              <div class="B_location_content_img">
                <img :src="item.imgSrc" :alt="item.countryName">
              </div>
              <div class="B_location_content_title">
                <div class="B_location_main_title">
                  <span>{{item.countryName}}</span>
                </div>
                <div class="B_location_sub_title">
                  <span>租车每日{{item.money}}元起</span>
                </div>
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
  name: 'bookingRentCarLocation',
  data () {
    return {
      locationData: [
        {
          imgSrc: require('@/assets/images/rentCountry/971353.jpg'),
          countryName: '马德里',
          money: 43
        },
        {
          imgSrc: require('@/assets/images/rentCountry/971353.jpg'),
          countryName: '马德里',
          money: 43
        },
        {
          imgSrc: require('@/assets/images/rentCountry/971353.jpg'),
          countryName: '马德里',
          money: 43
        },
        {
          imgSrc: require('@/assets/images/rentCountry/971353.jpg'),
          countryName: '马德里',
          money: 43
        },
        {
          imgSrc: require('@/assets/images/rentCountry/971353.jpg'),
          countryName: '马德里',
          money: 43
        },
        {
          imgSrc: require('@/assets/images/rentCountry/971353.jpg'),
          countryName: '马德里',
          money: 43
        },
        {
          imgSrc: require('@/assets/images/rentCountry/971353.jpg'),
          countryName: '马德里',
          money: 43
        },
        {
          imgSrc: require('@/assets/images/rentCountry/971353.jpg'),
          countryName: '马德里',
          money: 43
        },
        {
          imgSrc: require('@/assets/images/rentCountry/971353.jpg'),
          countryName: '马德里',
          money: 43
        },
        {
          imgSrc: require('@/assets/images/rentCountry/971353.jpg'),
          countryName: '马德里',
          money: 43
        },
        {
          imgSrc: require('@/assets/images/rentCountry/971353.jpg'),
          countryName: '马德里',
          money: 43
        },
        {
          imgSrc: require('@/assets/images/rentCountry/971353.jpg'),
          countryName: '马德里',
          money: 43
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.B_bookingRentCarLocation
  margin 0 auto 16px
  max-width 1100px
  min-width 620px
  .B_location_title
    padding-top 32px
    margin 0 0 12px 0
    font-size 24px
    font-weight 600
  .B_location_content
    width 100%
    .B_location_content_ul
      margin -32px 0 0 -16px
      width 1142px
      overflow hidden
      .B_location_content_li
        padding 32px 16px 0 16px
        box-sizing border-box
        width 25%
        float left
        .B_location_content_notes
          width 100%
          position relative
          .B_location_content_img
            cursor pointer
            border-radius 2px 2px 0 0
            height 240px
            overflow hidden
            img
              width 100%
              height 100%
          .B_location_content_title
            position absolute
            padding 16px
            bottom 0
            left 0
            width 100%
            box-sizing border-box
            background linear-gradient(to top,rgba(0,0,0,1) 0,rgba(0,0,0,0.8) 50%,rgba(0,0,0,0) 100%)
            color #ffffff
            &:hover
              color $search-tab-bgc-color
            .B_location_main_title
              font-size 20px
              font-weight 700
              line-height 28px
            .B_location_sub_title
              font-size 14px
              font-weight 400
              line-height 14px
</style>
