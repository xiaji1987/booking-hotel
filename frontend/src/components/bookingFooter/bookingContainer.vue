<template>
  <div class="B_bookingContainer">
    <div class="B_container">
      <div class="B_container_help_info">
        <div class="B_container_help_title">
          <img src="@/assets/images/iconfont/phone.png" alt="电话">
          <h3>24小时客服助您安心出行</h3>
          <p>订单有问题？我们来帮您！</p>
        </div>
        <div class="B_container_help_numbers">
          <div class="B_container_help_phone">
            <p>中文客服热线</p>
            <p>
              <router-link to="" class="B_container_more_help">
                点击了解更多客服帮助
              </router-link>
            </p>
          </div>
          <div class="B_container_help_center">
            <p>常见问题</p>
            <p>去<router-link to="" class="B_container_more_help">帮助中心</router-link>看看
            </p>
          </div>
        </div>
      </div>
      <div class="B_container_subscribe">
        <div class="B_container_subscribe_title">
          <p>方便又省钱！</p>
          <p>立即注册，获取优惠好价！</p>
        </div>
        <div class="B_container_subscribe_input">
          <input type="text" placeholder="您的电子邮箱地址" class="B_container_subscribe_input_content">
          <div class="B_container_subscribe_btn">
            <router-link to="">
              <span>订阅!</span>
            </router-link>
          </div>
        </div>
        <div class="B_container_subscribe_link">
          <input type="checkbox">
          <div class="B_container_subscribe_link_content">
            <span>请同时给我发送Booking.com免费App下载链接</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingContainer'
}
</script>

<style scoped lang="stylus">
.B_bookingContainer
  margin-top 26px
  padding 50px 0
  background-color #001b42
  color #ffffff
  text-align center
  .B_container
    max-width 1094px
    min-width 620px
    margin 0 auto
    padding 0 8px
    .B_container_help_info
      background-color #ffffff
      display inline-block
      vertical-align top
      position relative
      width 44%
      margin-right 5%
      border-radius 4px
      color #383838
      .B_container_help_title
        padding 15px 0 0 70px
        text-align-last left
        img
          position absolute
          top 15px
          left 10px
          height 38px
          width 38px
        p
          font-size 16px
          color #8e8e8e
          padding-top 4px
      .B_container_help_numbers
        padding 10px 0 15px 70px
        position relative
        overflow hidden
        .B_container_help_phone
          float left
          width 40%
          margin-right 40px
          .B_container_more_help
            font-size 16px
            font-weight bold
            color #0077cc
            cursor pointer
        .B_container_help_center
          float left
          width 28%
          .B_container_more_help
            font-size 16px
            font-weight bold
            color #0077cc
            cursor pointer
    .B_container_subscribe
      display inline-block
      width 50%
      color #ffffff
      text-align center
      .B_container_subscribe_title
        font-size 24px
        line-height 32px
        font-weight 300
        display block
      .B_container_subscribe_input
        max-width 100%
        margin 20px auto 0 auto
        .B_container_subscribe_input_content
          font-size 20px
          line-height 28px
          color #707070
          border-radius 3px
          font-weight 100
          padding 10px
          width 65%
          margin-right 5px
          display inline-block
        .B_container_subscribe_btn
          width 160px
          box-sizing border-box
          border-radius 3px
          border 0
          padding 0 15px
          font-size 20px
          line-height 48px
          font-weight 300
          height 48px
          background-color #07c
          display inline-block
          vertical-align top
          span
            color #ffffff
      .B_container_subscribe_link
        margin 10px 0 0 0
        text-align left
        cursor default
        input
          display inline-block
        .B_container_subscribe_link_content
          display inline-block
          vertical-align top
</style>
