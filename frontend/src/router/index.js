import Vue from 'vue'
import Router from 'vue-router'

const _import_ = file => () => import(`@/pages/${file}.vue`)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/booking'
    },
    {
      path: '/booking',
      name: 'booking',
      component: _import_('booking'),
      children: [
        // {
        //   path: '/',
        //   redirect: '/booking/hotel'
        // },
        {
          path: '/',
          name: '/',
          component: _import_('hotel'),
          meta: {
            title: 'Booking.com | 官网 | 热门酒店和民宿'
          }
        },
        {
          path: 'plane',
          name: 'plane',
          component: _import_('plane'),
          meta: {
            title: 'Booking 飞机'
          }
        },
        {
          path: 'rentCar',
          name: 'rentCar',
          component: _import_('rentCar'),
          meta: {
            title: 'Booking 租车'
          }
        },
        {
          path: 'fWheel',
          name: 'fWheel',
          component: _import_('fWheel'),
          meta: {
            title: 'Booking 观光和活动'
          }
        },
        {
          path: 'taxi',
          name: 'taxi',
          component: _import_('taxi'),
          meta: {
            title: 'Booking 出租车'
          }
        }
      ]
    },
    {
      path: '/user/login',
      name: 'login',
      component: _import_('login'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/user/register',
      name: 'register',
      component: _import_('register'),
      meta: {
        title: '注册'
      }
    }
  ]
})
