<template>
  <div class="B_bookingHotelExplore">
    <div class="B_explore_title">
      <h2>探索目的地</h2>
    </div>
    <div class="B_explore_tab">
      <div class="B_explore_more_location">
        <router-link to="">
          <span>更多目的地</span>
        </router-link>
      </div>
      <ul class="B_explore_tab_ul">
        <li :class="`B_explore_tab_li ${exploreTabClick === (item - 1) ? 'B_explore_tab_li_click' : ''}`" v-for="item in getExploreLength()" :key="item" @click="tabClick(item)">
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
    <div class="B_explore_country_show">
      <ul class="B_explore_country_ul">
        <li class="B_explore_country_li" v-for="item in imgLength" :key="item">
          <router-link to="">
            <div class="B_explore_country_img">
              <img :src="exploreData[exploreTabClick * 5 + item - 1].imgSrc" alt="">
              <p class="B_explore_country_content">{{exploreData[exploreTabClick * 5 + item - 1].locationContent}}</p>
            </div>
            <div class="B_explore_country_name">
              <span>{{exploreData[exploreTabClick * 5 + item - 1].locationName}}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingHotelExplore',
  data () {
    return {
      exploreTabClick: 0,
      imgLength: 5,
      exploreData: [
        {
          locationName: '美国',
          imgSrc: require('@/assets/images/countryImg/689587.jpg'),
          locationContent: '休闲、餐厅、购物，一切等你来！下一站，美国！'
        },
        {
          locationName: '美国',
          imgSrc: require('@/assets/images/countryImg/689587.jpg'),
          locationContent: '休闲、餐厅、购物，一切等你来！下一站，美国！'
        },
        {
          locationName: '美国',
          imgSrc: require('@/assets/images/countryImg/689587.jpg'),
          locationContent: '休闲、餐厅、购物，一切等你来！下一站，美国！'
        },
        {
          locationName: '美国',
          imgSrc: require('@/assets/images/countryImg/689587.jpg'),
          locationContent: '休闲、餐厅、购物，一切等你来！下一站，美国！'
        },
        {
          locationName: '英国',
          imgSrc: require('@/assets/images/countryImg/689587.jpg'),
          locationContent: '休闲、餐厅、购物，一切等你来！下一站，美国！'
        },
        {
          locationName: '中国',
          imgSrc: require('@/assets/images/countryImg/689587.jpg'),
          locationContent: '休闲、餐厅、购物，一切等你来！下一站，美国！'
        }
      ]
    }
  },
  methods: {
    getExploreLength () {
      return Math.ceil(this.exploreData.length / 5)
    },
    tabClick (item) {
      this.exploreTabClick = item - 1
      this.getUl(item)
    },
    getUl (item) {
      if (item === this.getExploreLength()) {
        this.imgLength = this.exploreData.length % 5
      } else {
        this.imgLength = 5
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.B_bookingHotelExplore
  max-width 1110px
  padding 10px 5px 0 5px
  min-width 620px
  margin 0 auto
  .B_explore_title
    margin-bottom 16px
  .B_explore_tab
    overflow hidden
    .B_explore_tab_ul
      float right
      .B_explore_tab_li
        cursor pointer
        background-color #838383
        display inline-block
        font-size 13px
        height 20px
        line-height 20px
        padding 0 7px
        margin 0 5px 0 0
        color #ffffff
        box-sizing border-box
      .B_explore_tab_li_click
        background-color #0077cc
    .B_explore_more_location
      font-size 14px
      float right
      line-height 20px
      span
        color #0077cc
  .B_explore_country_show
    padding-top 10px
    .B_explore_country_ul
      overflow hidden
      .B_explore_country_li
        float left
        width 19.04%
        margin 0 1.2% 0 0
        font-size 14px
        line-height 18px
        position relative
        .B_explore_country_img
          height 135px
          overflow hidden
          width 100%
          img
            width 100%
            height 100%
          .B_explore_country_content
            position absolute
            left 0
            top 0
            width 100%
            padding 0 15px
            box-sizing border-box
            color #ffffff
            font-size 13px
            text-align center
            background-color rgba(0,0,0,0.3)
            line-height 30px
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
        .B_explore_country_img:hover
          .B_explore_country_content
            height 135px
            line-height 135px
        .B_explore_country_name
          color #0077cc
          cursor pointer
          text-align center
          line-height 2
      .B_explore_country_li:last-child
        margin-right 0
</style>
