<template>
  <div>
    <tabbar>
      <tabbar-item>
        <svg-icon slot="icon" icon-class="order"></svg-icon>
        <span slot="label">抢单</span>
      </tabbar-item>
      <tabbar-item>
        <svg-icon slot="icon" icon-class="customer"></svg-icon>
        <span slot="label">客户</span>
      </tabbar-item>
      <tabbar-item @on-item-click="say">
        <svg-icon slot="icon" icon-class="me"></svg-icon>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
import testAPI from '@/api/test'
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      obj: {
        name: 'houbaoguo',
        pass: '123456'
      }
    }
  },
  methods: {
    say () {
      testAPI.test(JSON.stringify(this.obj)).then((res) => {
        console.log(res)
      })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.svg-icon{
  width: 24px!important;
  height: 24px!important
}
.weui-tabbar{
  background-color: #fff!important;
}
</style>
