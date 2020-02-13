<template>
  <div class="B_bookingfWheelImg">
    <div class="B_img_show">
      <img src="@/assets/images/fWheelImg/3_panorama.fb35b7ff.jpg" alt="图片">
    </div>
    <div class="B_img_title">
      <span>让每一次旅行都刻骨铭心</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingfWheelImg'
}
</script>

<style scoped lang="stylus">
.B_bookingfWheelImg
  width 100%
  position relative
  .B_img_show
    width 100%
    img
      width 100%
  .B_img_title
    position absolute
    top 32px
    left 200px
    font-size 40px
    line-height 48px
    font-weight 700
    color #000000
</style>
