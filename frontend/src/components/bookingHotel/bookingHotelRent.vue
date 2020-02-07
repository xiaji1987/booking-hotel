<template>
  <div class="B_bookingHotelRent">
    <div class="B_rent_title">
      <h2>客人喜爱的民宿短租</h2>
    </div>
    <div class="B_rent_list">
      <ul class="B_rent_ul">
        <li class="B_rent_li" v-for="(item, index) in 5" :key="index">
          <router-link to="">
            <div class="B_rent_hotel">
              <div class="B_rent_hotel_img">
                <img src="@/assets/images/hotel/60345914.jpg" alt="短租图片">
              </div>
              <div class="B_rent_hotel_info">
                <div class="B_rent_hotel_name">
                  <span>休格公寓式酒店</span>
                </div>
                <div class="B_rent_hotel_location">
                  <span>里约热内卢</span>
                </div>
                <div class="B_rent_hotel_price">4444元起</div>
                <div class="B_rent_hotel_comment">
                  <div class="B_rent_hotel_score">
                    <span>9.3</span>
                  </div>
                  <div class="B_rent_hotel_comment_num">
                    <span class="B_rent_hotel_grade">好极了</span>
                    <span class="B_rent_hotel_yelp"> · 17条住客点评</span>
                  </div>
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
  name: 'bookingHotelRent'
}
</script>

<style scoped lang="stylus">
.B_bookingHotelRent
  max-width 1110px
  padding 10px 5px 0 5px
  min-width 620px
  margin 0 auto
  .B_rent_title
    margin-bottom 16px
  .B_rent_list
    position relative
    height 356px
    box-sizing border-box
    .B_rent_ul
      position absolute
      padding-left 0
      padding-right 0
      padding 0 16px 24px 0
      margin 0 0 -24px
      display flex
      flex-wrap nowrap
      width 100%
      justify-content flex-start
      .B_rent_li
        width calc((100% - 64px)/5)
        padding-right 16px
        flex 0 0 auto
        .B_rent_hotel
          .B_rent_hotel_img
            cursor pointer
            border-radius 2px
            height 240px
            position relative
            img
              width 100%
              height 240px
          .B_rent_hotel_info
            padding 16px 0
            max-width 100%
            box-sizing border-box
            .B_rent_hotel_name
              font-size 14px
              font-weight 400
              line-height 15px
              color #0077cc
            .B_rent_hotel_location
              font-size 14px
              font-weight 400
              line-height 1.4857em
              color #707070
            .B_rent_hotel_price
              font-size 14px
              font-weight 600
              line-height 20px
              margin-bottom 0
              margin-top 8px
              color #000
            .B_rent_hotel_comment
              margin-top 4px
              font-weight bold
              color #707070
              font-size 14px
              .B_rent_hotel_score
                width 28px
                height 28px
                font-size 14px
                line-height 28px
                font-weight 500
                min-width 28px
                background-color #003580
                color #ffffff
                text-align center
                border-radius 6px 6px 6px 0
                display inline-block
              .B_rent_hotel_comment_num
                display inline-block
                margin-left 6px
                align-items center
                font-size 14px
                .B_rent_hotel_grade
                  color #003580
                  font-size 14px
                  font-weight 500
                  line-height 1
                .B_rent_hotel_yelp
                  font-size 12px
                  font-weight 400
                  margin-top 2px
                  line-height 1
        .B_rent_hotel:hover
          .B_rent_hotel_name
            color #b75f00
</style>
