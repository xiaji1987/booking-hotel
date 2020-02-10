<template>
  <div class="B_bookingRentCarDestination">
    <div class="B_destination_title">
      <h2>热门租车地</h2>
    </div>
    <div class="B_destination_rent_list">
      <ul class="B_destination_rent_ul">
        <li class="B_destination_rent_li" v-for="(item, index) in rentCountry" :key="index">
          <div class="B_destination_rent">
            <div class="B_destination_rent_img">
              <router-link to="">
                <img :src="item.countyImgSrc" alt="国家">
              </router-link>
            </div>
            <div class="B_destination_rent_content">
              <div class="B_destination_rent_title">
                <router-link to="">
                  <div class="B_destination_rent_country">
                    <span>{{item.countryName}}</span>
                  </div>
                  <div class="B_destination_rent_num">
                    <span>{{item.rentNum}}个租车点</span>
                  </div>
                </router-link>
              </div>
              <div class="B_destination_rent_car">
                <div class="B_destination_rent_car_img">
                  <img src="@/assets/images/iconfont/carDark.png" alt="车">
                </div>
                <div class="B_destination_rent_car_info">
                  <p>每日{{item.money}}元起</p>
                  <p>{{item.carType}}</p>
                </div>
              </div>
               <div class="B_destination_rent_more">
                 <router-link to="">
                    <span>搜索{{item.countryName}}租车</span>
                  </router-link>
                </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingRentCarDestination',
  data () {
    return {
      rentCountry: [
        {
          countyImgSrc: require('@/assets/images/rentCountry/620029.jpg'),
          countryName: '曼谷',
          rentNum: 22,
          money: 43,
          carType: '商务车'
        },
        {
          countyImgSrc: require('@/assets/images/rentCountry/620029.jpg'),
          countryName: '曼谷',
          rentNum: 22,
          money: 43,
          carType: '商务车'
        },
        {
          countyImgSrc: require('@/assets/images/rentCountry/620029.jpg'),
          countryName: '曼谷',
          rentNum: 22,
          money: 43,
          carType: '商务车'
        },
        {
          countyImgSrc: require('@/assets/images/rentCountry/620029.jpg'),
          countryName: '曼谷',
          rentNum: 22,
          money: 43,
          carType: '商务车'
        },
        {
          countyImgSrc: require('@/assets/images/rentCountry/620029.jpg'),
          countryName: '曼谷',
          rentNum: 22,
          money: 43,
          carType: '商务车'
        },
        {
          countyImgSrc: require('@/assets/images/rentCountry/620029.jpg'),
          countryName: '曼谷',
          rentNum: 22,
          money: 43,
          carType: '商务车'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.B_bookingRentCarDestination
  max-width 1110px
  padding 10px 5px 0 5px
  min-width 620px
  margin 0 auto
  .B_destination_title
    margin-bottom 16px
  .B_destination_rent_list
    .B_destination_rent_ul
      overflow hidden
      width 1142px
      margin -32px 0 0 -16px
      .B_destination_rent_li
        float left
        padding 32px 16px 0 16px
        box-sizing border-box
        width 33.33333%
        background-color #fff
        .B_destination_rent
          color #000000
          border 1px solid #e0e0e0
          border-radius 2px
          .B_destination_rent_img
            cursor pointer
            border-radius 2px 2px 0 0
            height 240px
            overflow hidden
            img
              width 100%
              height 100%
          .B_destination_rent_content
            padding 16px
            box-sizing border-box
            .B_destination_rent_title
              margin-bottom 16px
              .B_destination_rent_country
                span
                  color #000000
                  font-size 20px
                  font-weight 700
                  line-height 20px
              .B_destination_rent_num
                margin-top 5px
                font-size 14px
                color #707070
                font-weight 400
                line-height 14px
            .B_destination_rent_car
              margin-bottom 16px
              .B_destination_rent_car_img
                display inline-block
                vertical-align middle
                margin 8px 0 0 4px
                img
                  width 32px
                  height 32px
              .B_destination_rent_car_info
                display inline-block
                vertical-align middle
                font-size 13px
            .B_destination_rent_more
              margin-bottom 4px
              span
                color #000000
                font-size 14px
              &:hover
                span
                    color #b75f00
</style>
