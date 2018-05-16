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
        <x-button class="order_btn" @click.native="showfaildialong()">50J币抢单</x-button>
      </div>
    </scroll>
    <confirm v-model="showfail"
      :title="tip"
      :confirm-text="confirm"
      :cancel-text="cancel"
      >
        <p style="text-align:center;" :class="{'fail': tip ===''}">{{content}}</p>
      </confirm>

      <x-dialog v-model="is_show_dialong">
        <div class="dialong_box">
          <div class="s_title">
            <p :class="{'fail': auth == false}">{{dialongObj.dialong_title}}</p>
          </div>

          <p class="s_content">{{dialongObj.dialong_content}}</p>

          <flexbox justify="center">
            <flexbox-item :span="5" v-if="!auth">
              <x-button @click.native="closedialong()" class="bg_reset">以后再说</x-button>
            </flexbox-item>
            <flexbox-item :span="5" v-if="!auth">
              <x-button @click.native="closedialong()">前往认证</x-button>
            </flexbox-item>
            <flexbox-item :span="5" v-if="auth">
              <x-button @click.native="closedialong()">确定</x-button>
            </flexbox-item>
          </flexbox>
        </div>
      </x-dialog>
  </div>
</template>

<script>
import header from '@/components/header/index'
import avtbox from '@/components/avtbox/index'
import detailsList from '@/components/detailsList/index'
import { Flexbox, FlexboxItem, XButton, Confirm, XDialog } from 'vux'
export default {
  components: {
    'v-header': header,
    'v-avtbox': avtbox,
    'v-list': detailsList,
    XButton,
    Flexbox,
    FlexboxItem,
    Confirm,
    XDialog
  },
  data () {
    return {
      arr: {
        username: '张**',
        appSex: 'M',
        cityname: '武汉',
        occupation: '在职员工',
        loanMoney: '2-5万',
        dataLevel: 5,
        registration_time: '2018-05-09'
      },
      showfail: false,
      tip: '',
      content: '抱歉，您的J币不足，请先充值',
      confirm: '前往充值',
      cancel: '以后再说',
      dialongObj: {
        dialong_title: '抢单成功',
        dialong_content: '请尽快与客户联系已购订单可在「客户」菜单中管理'
      },
      is_show_dialong: false,
      auth: true
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
    height: e('calc(100vh - 216px)');
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
    .order_btn{
      margin-top: 22px;
      width: 80%;
      height: 38px;
      border-radius: 20px;
    }
  }
</style>
