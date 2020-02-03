<template>
  <div class="B_header_raChart">
    <div class="B_raChart">
      <ul class="B_raChart_ul">
        <li class="B_raChart_li" v-for="(item, index) in raChartList" :key="index" @mouseenter="raChartEnter(index)" @click="raChartClick(index)">
          <router-link :to="item.linkTo">
            <div class="B_raChart_img">
              <img :src="index === raChartHover ? item.imageLow : item.imageUp" :alt="item.name">
            </div>
            <div class="B_raChart_name">
              <span>{{item.name}}</span>
            </div>
            <!-- <div class="B_raChart_tab" v-show="index === raChartOnClick"></div> -->
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'B_header_raChart',
  data () {
    return {
      raChartOnClick: 0,
      raChartHover: 0,
      raChartList: [
        {
          name: '住宿',
          linkTo: '/booking',
          imageLow: require('@/assets/images/iconfont/hotellow.png'),
          imageUp: require('@/assets/images/iconfont/hotelup.png')
        },
        {
          name: '机票',
          linkTo: '/booking/plane',
          imageLow: require('@/assets/images/iconfont/planelow.png'),
          imageUp: require('@/assets/images/iconfont/planeup.png')
        },
        {
          name: '租车',
          linkTo: '/booking/rentCar',
          imageLow: require('@/assets/images/iconfont/rentlow.png'),
          imageUp: require('@/assets/images/iconfont/rentup.png')
        },
        {
          name: '观光和活动',
          linkTo: '/booking/fWheel',
          imageLow: require('@/assets/images/iconfont/fwheellow.png'),
          imageUp: require('@/assets/images/iconfont/fwheelup.png')
        },
        {
          name: '机场出租车',
          linkTo: '/booking/taxi',
          imageLow: require('@/assets/images/iconfont/taxilow.png'),
          imageUp: require('@/assets/images/iconfont/taxiup.png')
        }
      ]
    }
  },
  methods: {
    raChartEnter (index) {
      this.raChartHover = index
    },
    raChartClick (index) {
      this.raChartOnClick = index
    }
  }
}
</script>

<style scoped lang="stylus">
.B_header_raChart
  width 100%
  height 100%
  background-color $base-color
  z-index 1
  .B_raChart
    padding-bottom 1px
    height 59px
    min-width 980px
    max-width 1100px
    margin 0 auto
    .B_raChart_ul
      margin-left -16px
      .B_raChart_li
        float left
        padding 16px 8px 16px 4px
        opacity .8
        text-align left
        margin-left 8px
        margin-right 16px
        position relative
        .B_raChart_img
          display inline-block
          height 24px
          width 24px
          margin-right 12px
          background-color #003580
          opacity 1
          img
            vertical-align middle
            height 24px
            width 24px
        .B_raChart_name
          color #ffffff
          font-size 14px
          line-height 20px
          display inline-block
        // .B_raChart_tab
        //   color red
        //   width 100%
        //   height 4px
        //   position absolute
        //   left 0
        //   top 56px
        //   opacity 1
        //   z-index 99
</style>
