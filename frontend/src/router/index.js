import Vue from 'vue'
import Router from 'vue-router'

const _import_ = file => () => import(`@/pages/${file}.vue`)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'booking',
      component: _import_('booking'),
      meta: {
        title: 'Booking 缤客'
      }
    },
    {
      path: '/user/login',
      name: 'login',
      component: _import_('login')
    }
  ]
})
