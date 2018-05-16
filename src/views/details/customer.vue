<template>
  <div>
    <v-header></v-header>
    <scroll ref="scroll" class="wrapper"
    :bounce="{top: false}">
      <v-avtbox :info="arr"></v-avtbox>
      <div class="list_box">
        <h1 class="title"><svg-icon icon-class="card"></svg-icon>基本信息</h1>
        <v-list :objkey="'年龄'" :objval="'20岁'"></v-list>
        <v-list :objkey="'手机号'" :objval="'183****7890'"></v-list>
        <h1 class="title title_two"><svg-icon icon-class="zican"></svg-icon>资产信用信息</h1>
        <v-list :objkey="'名下有房'" :objval="'有全款房'"></v-list>
        <v-list :objkey="'名下有车'" :objval="'有按揭车'"></v-list>
        <v-list :objkey="'名下保单'" :objval="'有'"></v-list>
        <v-list :objkey="'名下是否有社保'" :objval="'有'"></v-list>
        <v-list :objkey="'名下有公积金'" :objval="'有'"></v-list>
        <v-list :objkey="'名下有信用卡'" :objval="'有'"></v-list>
        <h1 class="title title_three"><svg-icon icon-class="history"></svg-icon>消费记录</h1>
        <v-list :objkey="'消费方式'" :objval="'J币兑换'"></v-list>
        <v-list :objkey="'支付金额'" :objval="'50J币'"></v-list>
        <v-list :objkey="'支付时间'" :objval="'2018-05-09 10:30:30'"></v-list>
      </div>
    </scroll>
  </div>
</template>

<script>
import header from '@/components/header/index'
import avtbox from '@/components/avtbox/index'
import detailsList from '@/components/detailsList/index'
export default {
  components: {
    'v-header': header,
    'v-avtbox': avtbox,
    'v-list': detailsList
  },
  data () {
    return {
      arr: {
        username: '张贝贝',
        appSex: 'F',
        cityname: '武汉',
        occupation: '在职员工',
        loanMoney: '2-5万',
        dataLevel: 3,
        registration_time: '2018-05-09'
      }
    }
  },
  methods: {
    showfaildialong () {
      this.showfail = !this.showfail
    },
    showdialong () {
      this.is_show_dialong = true
    },
    closedialong () {
      this.is_show_dialong = false
    }
  }
}
</script>

<style lang="less" scoped>
  .wrapper{
    height: e('calc(100vh - 46px)');
  }
  .list_box{
    background: #f7f8fa;
    padding-bottom: 50px;
    .title{
      padding-left: 10px;
      color:#424040;
      font-size: 16px;
      font-weight: normal;
      line-height: 35px;
      .svg-icon{
        color: #0373d3;
        width: 25px;
        height: 25px;
        font-size: 18px;
        margin-right: 5px;
        vertical-align: middle;
      }
    }
    .title_two{
      .svg-icon{
      color:#e69217;
      }
    }
    .title_three{
      .svg-icon{
      color:#fe6060;
       width: 22px;
        height: 22px;
      }
    }
    .order_btn{
      margin-top: 22px;
      width: 80%;
      height: 38px;
      border-radius: 20px;
    }
  }
</style>
