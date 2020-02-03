<template>
  <div class="B_header">
    <div class="B_header_bar">
      <div class="B_bar_left">
        <div class="B_left_img">
          <img src="@/assets/images/bookingImages/booking_logo.png" alt="Booking.com 缤客：在线酒店预订">
        </div>
      </div>
      <div class="B_bar_right">
        <ul class="B_right_mess">
          <li class="B_mess_li B_mess_li_currency" @click="addChoise">
            元
            <div class="B_currency_choice" v-show="isCurrencyShow">
              <div class="B_currency_use">
                <div class="B_currency_use_title">
                  <span>常用货币</span>
                </div>
                <div class="B_currency_use_context">
                  <ul class="B_currency_use_ul">
                    <li class="B_currency_use_li" v-for="(item, index) in useCurrency" :key="index">
                      <span class="B_currency_use_unit">{{item.currency_Unit}}</span>
                      <span class="B_currency_use_name">{{item.currency_Name}}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="B_currency_all">
                <div class="B_currency_all_title">
                  <span>所用货币</span>
                </div>
                <div class="B_currency_all_context">
                  <ul class="B_currency_all_ul">
                    <li class="B_currency_all_li" v-for="(item, index) in currency" :key="index">
                      <span class="B_currency_all_unit">{{item.currency_Unit}}</span>
                      <span class="B_currency_all_name">{{item.currency_Name}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="B_mess_li B_mess_li_country">
            <img src="@/assets/images/nationalFlag/china.png" alt="语言">
          </li>
          <li class="B_mess_li B_mess_li_weixin">
            <img src="@/assets/images/iconfont/weixin.png" alt="微信">
          </li>
          <li class="B_mess_li B_mess_li_residence">
            <div class="B_residence">
              <span>上线我的住宿</span>
            </div>
          </li>
          <li class="B_mess_li B_mess_li_register">
            <router-link to="/user/register">
              <div class="B_register">
                <span>注册</span>
              </div>
            </router-link>
          </li>
          <li class="B_mess_li B_mess_li_login">
            <router-link to="/user/login">
              <div class="B_login">
                <span>登录</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingTop',
  data () {
    return {
      currency: [],
      useCurrency: [],
      isCurrencyShow: false
    }
  },
  methods: {
    getUseCurrency () {
      for (let i = 0; i < this.currency.length; i++) {
        if (this.currency[i].is_currency_use === true) {
          this.useCurrency.push(this.currency[i])
        }
      }
      console.log(this.useCurrency)
    },
    addChoise () {
      this.isCurrencyShow = !this.isCurrencyShow
    }
  },
  created () {
    console.log('进入')
    this.$http({
      method: 'get',
      baseURL: 'currency'
    }).then(res => {
      console.log(res)
      if (res.data.code === 200) {
        this.currency = res.data.data
        // console.log(this.currency)
        this.getUseCurrency()
      } else {
        console.log(res.data.msg)
      }
    })
  }
}
</script>

<style scoped lang="stylus">
.B_header
  width 100%
  height 100%
  background-color $base-color
  .B_header_bar
    width 100%
    height 50px
    min-height 50px
    min-width 980px
    max-width 1100px
    margin 0 auto
    .B_bar_left
      position relative
      .B_left_img
        position absolute
        top 12px
        img
          width 198px
    .B_bar_right
      float right
      cursor pointer
      .B_right_mess
        .B_mess_li
          float left
        .B_mess_li_currency
          font-weight bold
          padding 17px
          display block
          line-height 16px
          color #f1f1f1
          white-space nowrap
          position relative
          .B_currency_choice
            position absolute
            left -376px
            top 50px
            width 800px
            background-color #fff
            border 1px solid $border-color
            box-shadow 0 0 8px $border-color
            border-radius 3px
            min-height 180px
            overflow hidden
            .B_currency_use, .B_currency_all
              height auto
              .B_currency_use_title, .B_currency_all_title
                height 100%
                clear both
                margin 9px
                span
                  color $font-color
                  font-weight bold
              .B_currency_use_context, .B_currency_all_context
                .B_currency_use_ul, .B_currency_all_ul
                  width 100%
                  // height auto
                  overflow hidden
                  .B_currency_use_li, .B_currency_all_li
                    box-sizing border-box
                    width 200px
                    float left
                    overflow hidden
                    padding 6px 8px
                    font-weight normal
                    .B_currency_use_unit, .B_currency_all_unit
                      color #666666
                      font-size 11px
                      font-weight bold
                      display inline-block
                      width 30px
                      padding-left 2px
                    .B_currency_use_name, .B_currency_all_name
                      color #0077cc
                      font-size 12px
                      display inline-block
                  .B_currency_use_li:hover, .B_currency_all_li:hover
                    background-color #ededed
        .B_mess_li_country
          padding 15px 17px 12px 17px
          img
            width 18px
        .B_mess_li_weixin
          padding 17px 17px 10px 17px
          img
            width 19px
        .B_mess_li_residence
          padding 10px 0 10px 10px
          .B_residence
            border 1px solid #ffffff
            background-color transparent
            color #ffffff
            font-size 12px
            padding 7px 10px
            font-weight bold
            border-radius 3px
        .B_mess_li_register, .B_mess_li_login
          padding 12px 17px 12px 17px
          .B_register, .B_login
            color #383838
            background-color #ffffff
            font-weight bold
            padding 7px 10px
            border-radius 3px
            font-size 12px
        .B_mess_li_login
          padding 12px 17px 12px 0px
</style>
