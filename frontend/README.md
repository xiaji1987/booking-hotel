## booking页面用vue
  1. npm run dev 抛弃程序，确认程序没问题
  2. 删除已有的不需要的文件
  3. title 设置
    在 router 中设置每一个路由的meta下面添加title属性
    在 main.js中设置
    router.beforeEach((to, from, next) => {
      if (to.meta.title) {
        document.title = to.meta.title
      }
      next()
    })
    例如: meta: {
        title: 'Booking 缤客'
      }
# 主页设计
  1. 建立一个pages 文件夹,  这个文件夹存放主要页面
  2. 配置懒加载路由
  3. 