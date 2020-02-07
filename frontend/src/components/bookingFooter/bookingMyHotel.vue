<template>
  <div class="B_bookingMyHotel">
    <div class="B_online_my_hotel">
      <div class="B_online_content">
        <router-link to="" class="B_online_content_linkto">
          <span>上线我的住宿</span>
        </router-link>
      </div>
    </div>
    <div class="B_list_info">
      <ul class="B_list_ul">
        <li class="B_list_li" v-for="(item, index) in listData" :key="index">
          <router-link to="" class="B_list_li_linkto">
            <span>{{item.linkName}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingMyHotel',
  data () {
    return {
      listData: [
        {
          linkName: '平板电脑版视图',
          linkTo: ''
        },
        {
          linkName: '手机版视图',
          linkTo: ''
        },
        {
          linkName: '您的账户',
          linkTo: ''
        },
        {
          linkName: '在线修改订单',
          linkTo: ''
        },
        {
          linkName: '客户帮助中心',
          linkTo: ''
        },
        {
          linkName: '成为分销合作伙伴',
          linkTo: ''
        },
        {
          linkName: 'Booking.com商旅服务',
          linkTo: ''
        },
        {
          linkName: '关注Booking.com官方微信号',
          linkTo: ''
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.B_bookingMyHotel
  background-color #003580
  font-size 13px
  .B_online_my_hotel
    border-bottom 1px solid #537bb4
    max-width 1094px
    min-width 620px
    margin 0 auto
    padding 0 8px
    position relative
    .B_online_content
      line-height 2
      margin 0
      padding 15px 10px
      text-align center
      .B_online_content_linkto
        border 1px solid #fff
        border-radius 3px
        display inline-block
        font-weight normal
        padding 0 15px
        color #fff
  .B_list_info
    max-width 1094px
    min-width 620px
    margin 0 auto
    padding 0 8px
    .B_list_ul
      text-align center
      overflow hidden
      .B_list_li
        float left
        .B_list_li_linkto
          color #fff
          font-weight bold
          text-decoration underline
          padding 15px 10px
          font-size 13px
          background 0
          border 0
          cursor pointer
          display inline-block
          line-height 1em
          height 1em
</style>
