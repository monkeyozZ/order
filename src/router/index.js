import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      component: () => import('@/views/register/index')
    },
    {
      path: '/xieyi',
      component: () => import('@/views/xieyi/index'),
      meta: {headertext: '接单宝平台服务协议'}
    },
    {
      path: '/login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/updatepass',
      component: () => import('@/views/updatepass/index')
    },
    {
      path: '/order',
      name: 'orderList',
      redirect: '/order/list',
      component: layout,
      children: [
        {
          path: 'list',
          name: 'orderList',
          component: () => import('@/views/orderlist/index'),
          meta: { headertext: '抢单列表' }
        }
      ]
    },
    {
      path: '/customer',
      name: 'customerList',
      redirect: '/customer/list',
      component: layout,
      children: [
        {
          path: 'list',
          name: 'customerList',
          component: () => import('@/views/customer/index'),
          meta: { headertext: '客户列表' }
        }
      ]
    }
  ]
})
/* router.beforeEach((to, from, next) => {
}) */
export default router
