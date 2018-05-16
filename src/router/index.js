import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/index'
import store from '@/store/index'

Vue.use(Router)

const router = new Router({
  /* mode: 'history', */
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
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
    },
    {
      path: '/order/details',
      name: 'orderDetails',
      component: () => import('@/views/details/order.vue'),
      meta: { headertext: '订单详情' }
    },
    {
      path: '/customer/details',
      name: 'customerDetails',
      component: () => import('@/views/details/customer.vue'),
      meta: { headertext: '客户详情' }
    },
    {
      path: '/person',
      component: layout,
      children: [
        {
          path: 'own',
          name: 'own',
          component: () => import('@/views/own/index.vue')
        }
      ]
    },
    {
      path: '/person',
      component: layout,
      children: [
        {
          path: 'auth',
          name: 'auth',
          component: () => import('@/views/auth/index.vue'),
          meta: { headertext: '实名认证' }
        }
      ]
    },
    {
      path: '/person',
      component: layout,
      children: [
        {
          path: 'personUploader',
          name: 'personUploader',
          component: () => import('@/views/personUploader/index.vue'),
          meta: { headertext: '免冠照片' }
        }
      ]
    },
    {
      path: '/person',
      component: layout,
      children: [
        {
          path: 'idcardUploader',
          name: 'idcardUploader',
          component: () => import('@/views/idcardUploader/index.vue'),
          meta: { headertext: '身份证认证' }
        }
      ]
    },
    {
      path: '/person',
      component: layout,
      children: [
        {
          path: 'zizhiauth',
          name: 'zizhiauth',
          component: () => import('@/views/zizhiauth/index.vue'),
          meta: { headertext: '资质认证' }
        }
      ]
    },
    {
      path: '/own',
      component: layout,
      children: [
        {
          path: 'integral',
          name: 'integral',
          component: () => import('@/views/integral/index.vue'),
          meta: { headertext: '我的积分' }
        }
      ]
    },
    {
      path: '/own',
      component: layout,
      children: [
        {
          path: 'jcoin',
          name: 'jcoin',
          component: () => import('@/views/jcoin/index.vue'),
          meta: { headertext: '我的J币' }
        }
      ]
    },
    {
      path: '/integral',
      component: layout,
      children: [
        {
          path: 'strategy',
          name: 'strategy',
          component: () => import('@/views/strategy/index.vue'),
          meta: { headertext: '积分攻略' }
        }
      ]
    },
    {
      path: '/recharge',
      component: layout,
      children: [
        {
          path: 'center',
          name: 'center',
          component: () => import('@/views/recharge/index.vue'),
          meta: { headertext: '充值中心' }
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus', { isLoading: true })
  if (to.meta.headertext) {
    store.dispatch('SetHeaderText', to.meta.headertext)
  }
  next()
})
router.afterEach(function (to) {
  store.commit('updateLoadingStatus', { isLoading: false })
})
export default router
