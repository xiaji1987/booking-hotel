<template>
  <div class="B_bookingTaxiDeliver">
    <div class="B_deliver_title">
      <h1>机场接送更轻松</h1>
    </div>
    <div class="B_deliver_content">
      <div class="B_deliver_detail">
        <div class="B_detail_list" v-for="(item, index) in deliverData" :key="index">
          <div class="B_detail_list_img">
            <img :src="item.imgSrc" alt="">
          </div>
          <div class="B_detail_list_content">
            <p class="B_detail_list_title">{{item.listTitle}}</p>
            <p class="B_detail_list_sub">{{item.listSub}}</p>
          </div>
        </div>
      </div>
      <div class="B_deliver_trip">
        <div class="B_trip_img">
          <img src="@/assets/images/bookingImages/road-map.svg" alt="">
        </div>
        <div class="B_trip_note_first">如何享用服务？</div>
        <div class="B_trip_note_second">享受精彩旅途！</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingTaxiDeliver',
  data () {
    return {
      deliverData: [
        {
          imgSrc: require('@/assets/images/bookingImages/car.svg'),
          listTitle: '预订机场出租车',
          listSub: '即时预订。如果计划有变，最晚可在计划接乘时间24小时前免费取消'
        },
        {
          imgSrc: require('@/assets/images/bookingImages/person.svg'),
          listTitle: '与司机会合',
          listSub: '您将在到达后与司机会合，并一同前往座驾。司机将及时关注您的航班，即使航班延误，司机也会贴心等候'
        },
        {
          imgSrc: require('@/assets/images/bookingImages/fence.svg'),
          listTitle: '抵达目的地',
          listSub: '安全快速抵达目的地，无需排队等候出租车，也无需盲目寻找公共交通'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.B_bookingTaxiDeliver
  width 1100px
  margin 32px auto
  .B_deliver_title
    margin-bottom 40px
    text-align center
  .B_deliver_content
    display flex
    .B_deliver_detail
      flex 1
      padding 32px 16px 0 16px
      box-sizing border-box
      .B_detail_list
        height 100px
        .B_detail_list_img
          display inline-block
          margin-right 16px
          img
            width 70px
        .B_detail_list_content
          display inline-block
          width 425px
          vertical-align top
          .B_detail_list_title
            font-size 20px
            font-weight 500
            line-height 28px
            margin 0 0 10px 0
          .B_detail_list_sub
            font-size 14px
            font-weight 400
            line-height 20px
    .B_deliver_trip
      flex 1
      padding 32px 16px 0 16px
      box-sizing border-box
      position relative
      .B_trip_img
        width 420px
        margin 24px auto
        img
          width 420px
          height 420px
      .B_trip_note_first
        position absolute
        left 40px
        top 30px
        background-color #ededed
        border-radius 4px
        padding 8px
        text-align center
        font-size 12px
      .B_trip_note_second
        position absolute
        left 50px
        bottom 20px
        font-size 12px
</style>
