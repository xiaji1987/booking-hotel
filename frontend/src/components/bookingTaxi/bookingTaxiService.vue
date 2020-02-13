<template>
  <div class="B_bookingTaxiService">
    <div class="B_taxi_service">
      <div class="B_service_title">
        <h2>机场出租车为你服务</h2>
      </div>
      <div class="B_service_chioce_list">
        <ul class="B_chioce_list_ul">
          <li :class="`B_chioce_list_li ${serviceClick === (item - 1) ? 'B_chioce_list_click' : ''}`" v-for="item in 3" :key="item" @click="clickSevice(item)">
            <span>{{(item === 1 || item === 2) ? `${1 + (item - 1) * 3} - ${3 + (item - 1) * 4}位乘客` : '全部出租车'}}</span>
          </li>
        </ul>
      </div>
      <div class="B_service_chioce_content">
        <div class="B_chioce_two" v-show="serviceClick != 1">
          <div class="B_chioce_content_list" v-for="(item, index) in twoService" :key="index">
            <div class="B_chioce_list">
              <div class="B_chioce_list_title">
                <h3>{{item.title}}</h3>
                <h4>{{item.car}}或同类型</h4>
              </div>
              <div class="B_chioce_list_text">
                <p>
                  <span>
                    <img src="@/assets/images/bookingImages/member.svg" alt="">
                  </span>
                  {{item.memberNum}}乘坐
                </p>
                <p>
                  <span>
                    <img src="@/assets/images/bookingImages/luggage.svg" alt="">
                  </span>
                  {{item.luggage}}件标准行李
                </p>
                <p>
                  <span>
                    <img src="@/assets/images/bookingImages/garden-hook.svg" alt="">
                  </span>
                  含举牌接机
                </p>
                <p>
                  <span>
                    <img src="@/assets/images/bookingImages/hook.svg" alt="">
                  </span>
                  免费取消
                </p>
              </div>
              <div class="B_chioce_list_btn">
                <router-link to="">
                  <span>搜索</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="B_chioce_three" v-show="serviceClick != 0">
          <div class="B_chioce_content_list" v-for="(item, index) in threeService" :key="index">
            <div class="B_chioce_list">
              <div class="B_chioce_list_title">
                <h3>{{item.title}}</h3>
                <h4>{{item.car}}或同类型</h4>
              </div>
              <div class="B_chioce_list_text">
                <p>
                  <span>
                    <img src="@/assets/images/bookingImages/member.svg" alt="">
                  </span>
                  {{item.memberNum}}乘坐
                </p>
                <p>
                  <span>
                    <img src="@/assets/images/bookingImages/luggage.svg" alt="">
                  </span>
                  {{item.luggage}}件标准行李
                </p>
                <p>
                  <span>
                    <img src="@/assets/images/bookingImages/garden-hook.svg" alt="">
                  </span>
                  含举牌接机
                </p>
                <p>
                  <span>
                    <img src="@/assets/images/bookingImages/hook.svg" alt="">
                  </span>
                  免费取消
                </p>
              </div>
              <div class="B_chioce_list_btn">
                <router-link to="">
                  <span>搜索</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingTaxiService',
  data () {
    return {
      serviceClick: 0,
      twoService: [
        {
          title: '标准',
          car: '斯柯达明锐',
          memberNum: 3,
          luggage: 2
        },
        {
          title: '豪华',
          car: '梅赛德斯-奔驰E级',
          memberNum: 3,
          luggage: 2
        }
      ],
      threeService: [
        {
          title: '商务',
          car: '标致5008',
          memberNum: 5,
          luggage: 5
        },
        {
          title: '豪华商务',
          car: '梅赛德斯-奔驰V级',
          memberNum: 6,
          luggage: 6
        },
        {
          title: '大型商务',
          car: '福特途睿欧',
          memberNum: 7,
          luggage: 7
        }
      ]
    }
  },
  methods: {
    clickSevice (item) {
      this.serviceClick = item - 1
    }
  }
}
</script>

<style scoped lang="stylus">
.B_bookingTaxiService
  width 100%
  background-color #f7f7f7
  padding 32px 0
  .B_taxi_service
    width 1100px
    margin 0 auto
    .B_service_title
      text-align center
    .B_service_chioce_list
      text-align center
      margin 24px 0 70px 0
      position relative
      .B_chioce_list_ul
        position absolute
        top 0
        left 50%
        transform translateX(-50%)
        clear both
        .B_chioce_list_li
          float left
          background-color #fff
          font-size 14px
          color $common-color
          font-weight 400
          line-height 20px
          border 1px solid $common-color
          cursor pointer
          border-radius 2px 0 0 2px
          padding 8px 16px
        .B_chioce_list_click
          background-color $common-color
          color #fff
    .B_service_chioce_content
      .B_chioce_two, .B_chioce_three
        display flex
        width 1164px
        .B_chioce_content_list
          flex 1
          margin 32px 16px 0 16px
          // box-sizing border-box
          background-color #fff
          border-radius 2px
          color #000000
          border 1px solid #e0e0e0
          .B_chioce_list
            padding 16px
            .B_chioce_list_text
              margin-top 16px
              p
                margin 2px 8px
                line-height 24px
                font-size 12px
                span
                  margin 0 2px
                  width 24px
                  height 18px
                  img
                    width 14px
                    height 14px
            .B_chioce_list_btn
              background-color $common-color
              border-radius 2px
              width 62px
              height 38px
              text-align center
              line-height 38px
              cursor pointer
              span
                color #fff
</style>
