import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/order/list',
      name: 'layout',
      component: layout,
      children: [
        {
          path: '/order/list',
          name: 'orderList',
          component: () => import('@/views/orderlist/index')
        }
      ]
    }
  ]
})
