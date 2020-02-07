<template>
  <div class="B_bookingHotelPopular">
    <div class="B_destination_title">
      <h2>热门目的地</h2>
    </div>
    <ul class="B_destination_tab">
      <li :class="`B_destination_tab_li ${tabClick === index ? 'B_destination_tab_li_click' : ''}`" v-for="(item, index) in tabLocation" :key="index" @click="tabOnClick(index)">
        <span>{{item.tabTitle}}</span>
      </li>
    </ul>
    <ul class="B_destination_location" v-for="(item, index) in tabLocation" :key="index" v-show="index === tabClick">
      <li class="B_destination_location_li" v-for="(location, locatIndex) in item.location" :key="locatIndex">
        <div class="B_destination_location_info">
          <router-link to="">
            <span class="B_destination_location_link">{{location.hotelName}}</span>
          </router-link>
          <span class="B_destination_location_num">{{location.hotelNum}}{{index !== 1 ? '家住宿' : '家酒店'}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'B_bookingHotelPopular',
  data () {
    return {
      tabClick: 0,
      tabLocation: [
        {
          tabTitle: '区域',
          location: [
            {
              hotelName: '槟城州',
              hotelNum: 2207
            },
            {
              hotelName: '民丹岛',
              hotelNum: 64
            },
            {
              hotelName: '槟城州',
              hotelNum: 2207
            },
            {
              hotelName: '民丹岛',
              hotelNum: 64
            },
            {
              hotelName: '槟城州',
              hotelNum: 2207
            },
            {
              hotelName: '民丹岛',
              hotelNum: 64
            },
            {
              hotelName: '槟城州',
              hotelNum: 2207
            },
            {
              hotelName: '民丹岛',
              hotelNum: 64
            }
          ]
        },
        {
          tabTitle: '城市',
          location: [
            {
              hotelName: '胡志明市',
              hotelNum: 6459
            },
            {
              hotelName: '曼谷',
              hotelNum: 3936
            }
          ]
        },
        {
          tabTitle: '周边地标/景点',
          location: [
            {
              hotelName: '香港迪士尼乐园',
              hotelNum: 856
            },
            {
              hotelName: '火车站',
              hotelNum: 37
            }
          ]
        }
      ]
    }
  },
  methods: {
    tabOnClick (index) {
      this.tabClick = index
    }
  }
}
</script>

<style scoped lang="stylus">
.B_bookingHotelPopular
  max-width 1110px
  padding 10px 5px 0 5px
  min-width 620px
  margin 0 auto
  .B_destination_title
    margin-bottom 16px
  .B_destination_tab
    padding 12px 0 0
    height 30px
    border-bottom 1px solid #0077cc
    overflow hidden
    .B_destination_tab_li
      display inline-block
      line-height 30px
      font-size 13px
      padding 0 15px
      color #737373
      cursor pointer
    .B_destination_tab_li_click
      background-color #0077cc
      color #ffffff
      cursor default
      pointer-events none
    .B_destination_tab_li:hover
      color #0077cc
  .B_destination_location
    padding 3px 0 17px
    overflow hidden
    .B_destination_location_li
      float left
      width 20%
      padding 0 2.25225% 0 0
      margin 10px 0 0
      box-sizing border-box
      .B_destination_location_info
        .B_destination_location_link
          color #0077cc
          font-size 14px
          display block
          line-height 20px
          text-overflow ellipsis
          word-spacing nowrap
          overflow hidden
        .B_destination_location_link:hover
          color #B75F00
        .B_destination_location_num
          color #a5a5a5
          font-size 13px
</style>
