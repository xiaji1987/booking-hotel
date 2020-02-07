<template>
  <div class="B_bookingHotelType">
    <div class="B_type_title">
      <h2>根据住宿类型浏览</h2>
    </div>
    <div class="B_type_list">
      <ul class="B_type_ul" :style="`left: ${typeUlLeft}px`">
        <li class="B_type_li" v-for="(item, index) in 10" :key="index">
          <div class="B_type_hotel">
            <div class="B_type_hotel_img">
              <router-link to="">
                <img src="@/assets/images/hotel/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="公寓图片">
              </router-link>
            </div>
            <div class="B_type_hotel_info">
              <div class="B_type_hotel_name">
                <router-link to="">
                  <span>公寓</span>
                </router-link>
              </div>
              <div class="B_type_hotel_num">
                <span>797902间公寓</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="B_type_button">
        <div class="B_type_common_button" v-for="(item, index) in buttonInfo" :key="index" :style="`opacity: ${item.buttonOpacity}; pointer-events: ${item.pointerEvents}`" @mouseenter="buttonOpacityUp(index)" @mouseleave="buttonOpacitydown(index)" @click="clickButton(index)">
          <img :src="item.imgSrc" alt="按钮">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'B_bookingHotelType',
  data () {
    return {
      typeUlLeft: 0,
      buttonClick: 0,
      buttonInfo: [
        {
          imgSrc: require('@/assets/images/iconfont/left.png'),
          buttonOpacity: 0,
          pointerEvents: 'none'
        },
        {
          imgSrc: require('@/assets/images/iconfont/right.png'),
          buttonOpacity: 0.8,
          pointerEvents: 'auto'
        }
      ]
    }
  },
  methods: {
    buttonOpacityUp (index) {
      this.buttonInfo[index].buttonOpacity = 1
    },
    buttonOpacitydown (index) {
      this.buttonInfo[index].buttonOpacity = 0.8
    },
    clickButton (index) {
      if (index === 0) {
        this.buttonClick -= 1
        this.typeUlLeft += 1126 / 5
      }
      if (index === 1) {
        this.buttonClick += 1
        this.typeUlLeft -= 1126 / 5
      }
      if (this.buttonClick !== 0 && this.buttonClick !== 5) {
        for (const item of this.buttonInfo) {
          item.buttonOpacity = 0.8
          item.pointerEvents = 'auto'
        }
      }
      if (this.buttonClick === 0) {
        this.buttonInfo[0].buttonOpacity = 0
        this.buttonInfo[0].pointerEvents = 'none'
      }
      if (this.buttonClick === 5) {
        // console.log('进入5了', this.buttonInfo[1].buttonOpacity)
        this.buttonInfo[1].buttonOpacity = 0
        this.buttonInfo[1].pointerEvents = 'none'
        // console.log('进入5了', this.buttonInfo[1].buttonOpacity)
      }
      // console.log(this.buttonInfo[1].buttonOpacity)
    }
  }
}
</script>

<style scoped lang="stylus">
.B_bookingHotelType
  max-width 1110px
  padding 10px 5px 0 5px
  min-width 620px
  margin 0 auto
  .B_type_title
    margin-bottom 16px
  .B_type_list
    position relative
    height 256px
    box-sizing border-box
    overflow hidden
    .B_type_ul
      position absolute
      padding-left 0
      padding-right 0
      padding 0 16px 24px 0
      margin 0 0 -24px
      display flex
      flex-wrap nowrap
      width 100%
      justify-content flex-start
      transition left 0.3s ease
      .B_type_li
        width calc((100% - 64px)/5)
        padding-right 16px
        flex 0 0 auto
        .B_type_hotel
          .B_type_hotel_img
            cursor pointer
            border-radius 2px
            height 180px
            position relative
            img
              width 100%
              height 180px
          .B_type_hotel_info
            padding 16px 0
            max-width 100%
            box-sizing border-box
            .B_type_hotel_name
              font-size 16px
              font-weight 700
              line-height 1.5em
            .B_type_hotel_num
              font-size 14px
              font-weight 400
              color #707070
    .B_type_button
      position absolute
      padding 16px
      top 35%
      transform translateY(-40%)
      left 0
      right 0
      display flex
      justify-content space-between
      box-sizing border-box
      pointer-events none
      .B_type_common_button
        box-shadow 0 6px 10px 0 rgba(0,0,0,.14), 0 3px 18px 0 rgba(0,0,0,.12), 0 3px 5px -1px rgba(0,0,0,.2)
        padding 4px
        border-radius 50%
        cursor pointer
        background #ffffff
        img
          width 32px
</style>
