<template>
  <div class="B_bookingRentCarProblem">
    <div class="B_problem_content">
      <div class="B_problem_title">
        <span>常见问题</span>
      </div>
      <div class="B_problem_detail">
        <ul class="B_problem_detail_ul">
          <li class="B_problem_detail_li" v-for="(item, index) in problemData" :key="index">
            <div class="B_problem_detail_title">
              <span>{{item.problem}}</span>
            </div>
            <!-- <div class="B_problem_detail_content">
              <span></span>
            </div> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingRentCarProblem',
  data () {
    return {
      problemData: [
        {
          problem: '租车有什么要求呢？'
        },
        {
          problem: '我是否达到租车年龄？'
        },
        {
          problem: '我能为配偶、朋友、同事等人租车吗？'
        },
        {
          problem: '在选择车辆时我应该注意哪些问题？'
        },
        {
          problem: '该租车价格是否包含了所有费用？'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.B_bookingRentCarProblem
  max-width 1100px
  min-width 620px
  margin 0 auto 32px
  .B_problem_content
    .B_problem_title
      background-color #f7f7f7
      width 25%
      display inline-block
      padding 32px 32px 0 32px
      height 290px
      box-sizing border-box
      vertical-align top
      font-size 24px
      line-height 32px
      font-weight 600
    .B_problem_detail
    vertical-align top
      display inline-block
      width 74.5%
      .B_problem_detail_ul
        width 100%
        .B_problem_detail_li
          padding 16px
          box-sizing border-box
          border 1px solid #f7f7f7
          span
            font-size 16px
            line-height 24px
            font-weight 500
</style>
