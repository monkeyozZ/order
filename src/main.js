// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './icons' // icon
import { ToastPlugin } from 'vux'
import scroll from '@/components/scroll/index'
Vue.component('scroll', scroll)
Vue.use(ToastPlugin, { position: 'top', width: '80%' })

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.filter('transformTime', function (nS) {
  let currentTime = Date.parse(new Date())
  let timeStr = Date.parse(nS)
  let cha = currentTime - timeStr
  if (cha <= 120000) {
    return '刚刚'
  } else {
    if (cha > 120000 && cha < 3600000) {
      let num = cha / 60000
      return Math.floor(num) + '分钟前'
    } else if (cha > 3600000 && cha < 86400000) {
      let num = cha / 3600000
      return Math.floor(num) + '小时前'
    } else {
      let date = new Date(timeStr)
      let Y = date.getFullYear() + '-'
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
      let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
      let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
      // let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
      return Y + M + D + h + m
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
