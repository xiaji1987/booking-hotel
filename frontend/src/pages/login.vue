<template>
  <div class="B_login">
    <div class="B_login_box">
      <div class="B_login_return">
        <router-link to="/">
          <span>
            <img src="@/assets/images/iconfont/leftBlue.png" alt="">
          </span>
          <span>
            Booking.com 缤客
          </span>
        </router-link>
      </div>
      <div class="B_login_title">
        <p class="B_login_main_title">登录</p>
        <p class="B_login_sub_title">登录帐号来使用Booking.com提供的各种服务。</p>
      </div>
      <div class="B_login_list">
        <div class="B_login_li_title">
          <div :class="`B_login_li_title_text ${isShowPhone === true ? 'B_login_li_title_show' : '' }`" @click="phoneClick()">
            <span>手机号码</span>
          </div>
          <div :class="`B_login_li_title_text ${isShowPhone === false ? 'B_login_li_title_show' : '' }`" @click="phoneClick()">
            <span>电子邮件</span>
          </div>
        </div>
        <ul class="B_login_ul">
          <li class="B_login_li" v-show="isShowPhone">
            <div class="B_login_li_input">
              <p class="B_login_input_p">手机号码</p>
              <div class="B_login_input_phone">
                <span>+86</span>
                <input type="text" v-model="phoneNum">
              </div>
              <p class="B_login_input_p">密码</p>
              <div class="B_login_input_phone">
                <input type="password" v-model="password">
              </div>
            </div>
          </li>
          <li class="B_login_li" v-show="!isShowPhone">
            <div class="B_login_li_input">
              <p class="B_login_input_p">电子邮箱</p>
              <div class="B_login_input_phone">
                <input type="text">
              </div>
            </div>
          </li>
        </ul>
        <p class="B_login_msg" v-show="isShowMsg">{{loginMsg}}</p>
        <div class="B_login_input_btn" @click="login()">
          <span>登录</span>
        </div>
      </div>
      <div class="B_login_login">
        <p>已有账号?
          <router-link class="B_login_to_login" to="/user/register">注册</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      isShowPhone: true,
      isShowMsg: false,
      phoneNum: '',
      password: '',
      loginMsg: ''
    }
  },
  methods: {
    phoneClick () {
      this.isShowPhone = !this.isShowPhone
    },
    login () {
      // console.log(this.phoneNum, this.password)
      const phoneNum = this.phoneNum
      const password = this.password
      const params = {
        username: phoneNum,
        password: password
      }
      if (phoneNum === '' || password === '') {
        // console.log('请输入电话号码或者密码')
        this.isShowMsg = true
        this.loginMsg = '请输入电话号码或者密码'
        this.setTimeMsg()
      } else if (!(/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(phoneNum))) {
        this.isShowMsg = true
        this.loginMsg = '输入的不是电话号码'
        this.setTimeMsg()
      } else {
        this.$http({
          method: 'post',
          baseURL: 'login',
          data: params
        }).then(res => {
          // console.log(res)
          if (res.data.code === 378) {
            this.isShowMsg = true
            this.loginMsg = res.data.msg
            this.phoneNum = ''
            this.password = ''
            this.setTimeMsg()
          } else if (res.data.code === 399) {
            this.isShowMsg = true
            this.loginMsg = res.data.msg
            this.password = ''
            this.setTimeMsg()
          } else if (res.data.code === 200) {
            this.$router.push('/')
          }
        })
      }
    },
    setTimeMsg () {
      const outMsg = setTimeout(() => {
        this.isShowMsg = false
        clearTimeout(outMsg)
      }, 5000)
    }
  }
}
</script>

<style scoped lang="stylus">
.B_login
  width 100%
  height 100vh
  background-color #F4F7FC
  position relative
  .B_login_box
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    padding 24px
    background-color #ffffff
    border-radius 6px
    box-shadow 0 2px 8px rgba(0,0,0,.08)
    .B_login_return
      width 337px
      padding-bottom 8px
      margin 3px 0 15px 0
      span
        color #0077cc
        font-size 16px
        font-weight bold
        vertical-align top
        img
          width 18px
          height 18px
    .B_login_title
      margin-bottom 32px
      .B_login_main_title
        font-size 24px
        font-weight 700
        line-height 32px
        margin-bottom 8px
      .B_login_sub_title
        font-size 14px
    .B_login_list
      .B_login_li_title
        display flex
        border-bottom 1px solid #D9D9D9
        .B_login_li_title_text
          flex 1
          font-weight 600
          padding 16px 0
          text-align center
          cursor pointer
        .B_login_li_title_show
          border-bottom 1px solid #0077cc
          color #0077cc
      .B_login_ul
        padding-top 24px
        .B_login_li
          width 100%
          .B_login_input_p
            font-size 16px
            margin-bottom 4px
          .B_login_input_phone
            height 38px
            border 1px solid #d9d9d9
            margin-bottom 20px
            span
              display inline-block
              border-right 1px solid #d9d9d9
              width 78px
              height 100%
              text-align center
              line-height 38px
            input
              display inline-block
              width 300px
              height 36px
              vertical-align top
              font-size 16px
          .B_login_input_code
            height 38px
            border 1px solid #d9d9d9
            input
              display inline-block
              height 35px
              width 277px
            .B_login_input_code_btn
              display inline-block
              width 100px
              border 1px solid #0077cc
              text-align center
              line-height 36px
              margin 0
              cursor pointer
              color #0077cc
      .B_login_msg
        font-size 16px
        color #D93025
        font-weight bold
      .B_login_input_btn
        margin-top 20px
        width 100%
        height 48px
        padding 12px
        text-align center
        box-sizing border-box
        background-color #07c
        font-size 16px
        color #ffffff
        cursor pointer
    .B_login_login
      margin-top 20px
      text-align center
      font-size 16px
      .B_login_to_login
        color #0077cc
</style>
