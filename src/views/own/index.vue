<template>
  <div>
    <div class="header_avt">
      <flexbox :gutter="0" justify="center">
        <flexbox-item :span="2.24">
          <img src="../../assets/user.png" alt="头像" class="avt">
        </flexbox-item>
      </flexbox>
      <flexbox :gutter="0" justify="center">
        <flexbox-item :span="4" class="name_mobile">
          <p>张贝贝</p>
          <p>13888888888</p>
        </flexbox-item>
      </flexbox>
      <flexbox :gutter="0" justify="center" class="jifen_jbi">
        <flexbox-item :span="5.9" class="jifen">
          <router-link to="/own/integral">
            <svg-icon icon-class="jifen"></svg-icon>
            <p>50积分</p>
          </router-link>
        </flexbox-item>
        <flexbox-item :span="5.9" class="jifen">
          <router-link to="/own/jcoin">
            <img src="../../assets/jbi.png" class="jbi">
            <p>100J币</p>
          </router-link>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="own_item_box">
      <group>
        <cell-box :is-link="true" link="/recharge/center" class="item_1">
          <div class="icon_box">
            <svg-icon icon-class="chongzhi"></svg-icon>
          </div>
          <span>充值中心</span>
        </cell-box>
        <cell-box :is-link="true" link="/person/auth">
         <div class="icon_box">
            <svg-icon icon-class="renzheng"></svg-icon>
          </div>
          <span>实名认证</span>
        </cell-box>
        <cell-box :is-link="true">
         <div class="icon_box">
            <svg-icon icon-class="yaoqing"></svg-icon>
          </div>
          <span>邀请好友</span>
        </cell-box>
        <cell-box :is-link="true">
         <div class="icon_box">
            <svg-icon icon-class="password"></svg-icon>
          </div>
          <span>修改密码</span>
        </cell-box>
        <cell-box :is-link="true">
         <div class="icon_box">
            <svg-icon icon-class="kefu"></svg-icon>
          </div>
          <span>客服电话<a href="13808888888" class="tel">13808888888</a></span>
        </cell-box>
      </group>
      <Flexbox :gutter="0" justify="center" class="btn_sinout">
        <flexbox-item :span="8.8">
            <x-button>退出登录</x-button>
        </flexbox-item>
      </Flexbox>
    </div>
  </div>
</template>

<script>
import {Flexbox, FlexboxItem, CellBox, Group, Cell, XButton} from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    CellBox,
    Group,
    Cell,
    XButton
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.header_avt{
  position: relative;
  height: 205px;
  background: url('../../assets/own_header.jpg');
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  img.avt{
    margin-top: 10px;
    display: inline-block;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
  .name_mobile{
    color:#f7f8fa;
    font-size: 14px;
    text-align: center;
  }
  .jifen_jbi{
    position: absolute;
    bottom: 10px;
    .jifen{
      text-align: center;
      a{
        display: inline-block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        color:#f7f8fa;
        font-size: 14px;
      }
    &:first-child{
      border-right:1px solid #65acea;
    }
  }
  .svg-icon{
    width: 22px;
    height: 22px;
  }
  }
}
.own_item_box{
  background: #f7f8fa;
  min-height: e('calc(100vh - 258px)');
  .vux-cell-box{
    background: #fff;
    font-size: 14px;
    color:#3d3d3d;
    &:first-child{
      overflow: hidden;
      margin-bottom: 10px;
    }
    &:nth-child(2){
      border-bottom: 1px solid #f7f8fa;
      &::before{
      content: none;
    }
    .icon_box{
      background: #fba414;
      .svg-icon{
        width: 22px;
        height: 22px;
        font-size: 22px;
      }
      }
    }
    &:nth-child(3){
       border-bottom: 1px solid #f7f8fa;
      &::before{
      content: none;
    }
    .icon_box{
      background: #97d321;
      .svg-icon{
        width: 20px;
        height: 20px;
        font-size: 20px;
      }
      }
    }
    &:nth-child(4){
       border-bottom: 1px solid #f7f8fa;
      &::before{
      content: none;
    }
    .icon_box{
      background: #57aefb;
      .svg-icon{
        font-size: 20px;
      }
      }
    }
     &:nth-child(5){
      &::before{
      content: none;
    }
    .icon_box{
      background: #fba414;
      .svg-icon{
        width: 18px;
        height: 18px;
        font-size: 18px;
      }
      }
      a.tel{
        margin-left: 10px;
        color:#3d3d3d;
      }
    }
    .icon_box{
      position: relative;
      width: 22px;
      height: 22px;
      background: #fd7b6d;
      border-radius: 3px;
      margin-right: 10px;
      .svg-icon{
        position: absolute;
        width: 14px;
        height: 14px;
        font-size: 14px;
        color:#fff;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
  }
  .btn_sinout{
    margin-top: 30px;
  }
}
</style>
