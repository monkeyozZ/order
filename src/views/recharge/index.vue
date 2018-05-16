<template>
<scroll ref="scroll" class="wrapper"
    :bounce="{top: false}">
  <div class="recharge_box">
     <h1 class="recharge_title"><svg-icon icon-class="recharge"></svg-icon>请选择充值金额</h1>
     <div class="money_box">
       <flexbox :gutter="0" justify="center">
         <flexbox-item :span="3" v-for="(item, index) in list_arr_top" :key="index" @click.native="selecte(item)">
           <div class="money_item" :class="{active: item.active == true}">
             <p>{{item.money}}J币</p>
             <p>赠送{{item.integral}}积分</p>
           </div>
         </flexbox-item>
       </flexbox>
       <flexbox :gutter="0" justify="center">
         <flexbox-item :span="3" v-for="(item, index) in list_arr_bottom" :key="index" @click.native="selecte(item)">
           <div class="money_item" :class="{active: item.active == true}">
             <p>{{item.money}}J币</p>
             <p>赠送{{item.integral}}积分</p>
           </div>
         </flexbox-item>
       </flexbox>
     </div>
     <div class="pay_box">
       <p>本次支付</p>
       <button>{{money_num}}元</button>
     </div>
     <h1 class="pay_title"><svg-icon icon-class="nopay"></svg-icon>请选择支付方式</h1>
     <div class="pay_way">
       <label class="check_box" for="wechat">
         <svg-icon icon-class="wechat" class="wechat"></svg-icon>
         <span class="check_title">微信支付</span>
         <input type="radio" id="wechat" value="wxpay" v-model="payWay">
         <i class="weui-icon weui_icon_circle weui-icon-circle"></i>
       </label>
       <label class="check_box" for="alipay">
         <svg-icon icon-class="alipay" class="alipay"></svg-icon>
         <span class="check_title">支付宝支付</span>
          <input type="radio" id="alipay" value="alipay" v-model="payWay">
         <i class="weui-icon weui_icon_circle weui-icon-circle"></i>
       </label>
     </div>
     <div class="tip">
        <h2>郑重声明：</h2>
        <p>1、最低充值金额为100J币</p>
        <p>2、J币充值为一次性消费，不支持提现，转赠，退款</p>
     </div>
     <x-button class="btn">确认支付</x-button>
  </div>
</scroll>
</template>

<script>
import {Flexbox, FlexboxItem, Checklist, XButton} from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Checklist,
    XButton
  },
  data () {
    return {
      list_arr_top: [
        {money: 100, integral: 100, active: true},
        {money: 200, integral: 300, active: false},
        {money: 300, integral: 400, active: false},
        {money: 400, integral: 600, active: false}
      ],
      list_arr_bottom: [
        {money: 100, integral: 100, active: false},
        {money: 200, integral: 300, active: false},
        {money: 300, integral: 400, active: false},
        {money: 400, integral: 600, active: false}
      ],
      money_num: 100,
      payWay: 'wxpay'
    }
  },
  methods: {
    selecte (item) {
      this.list_arr_top.forEach(function (item) {
        item.active = false
      })
      this.list_arr_bottom.forEach(function (item) {
        item.active = false
      })
      item.active = true
      this.money_num = item.money
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper{
  height: e('calc(100vh - 46px)');
}
.recharge_box{
  background: #f6f7f7;
  padding-bottom: 60px;
  min-height: e('calc(100vh - 46px)');
  .recharge_title{
      padding-left: 10px;
      color:#424040;
      font-size: 16px;
      font-weight: normal;
      line-height: 42px;
      .svg-icon{
        color: #0373d3;
        width: 25px;
        height: 25px;
        font-size: 18px;
        margin-right: 5px;
        vertical-align: middle;
      }
    }
    .pay_title{
      padding-left: 10px;
      color:#424040;
      font-size: 16px;
      font-weight: normal;
      line-height: 42px;
      .svg-icon{
        color: #0373d3;
        width: 25px;
        height: 25px;
        font-size: 18px;
        margin-right: 5px;
        vertical-align: middle;
      }
    }
    .money_box{
      padding: 13px 10px;
      box-sizing: border-box;
      background: #fff;
      text-align: center;
      .money_item{
        margin:0 2.5px;
         border:1px solid #cfd1d4;
          border-radius: 5px;
        p{
          text-align: center;
          &:first-child{
            font-size: 14px;
            color:#434343;
          }
          &:last-child{
            font-size: 12px;
            color:#ff9800;
          }
        }
      }
      .money_item.active{
        border:1px solid #027be3;
        background: #027be3;
        p{
          text-align: center;
          &:first-child{
            font-size: 14px;
            color:#fff;
          }
          &:last-child{
            font-size: 12px;
            color:#fff;
          }
        }
      }
    }
    .vux-flex-row{
      &:last-child{
        margin-top: 12px;
      }
    }
    .pay_box{
      margin-top: 5px;
      background: #fff;
      text-align: center;
      padding: 10px 0;
      p{
        color: #e43221;
        padding-bottom: 10px;
      }
      button{
        width: 34.66666%;
        padding: 10px 0;
        border:1px solid #e7625d;
        border-radius: 5px;
        background: #fff;
        outline: none;
        color:#e7625d;
      }
    }
    .pay_way{
      .check_box{
        display: block;
        position: relative;
        background: #fff;
        padding: 10px 15px;
        .weui-icon{
        position: absolute;
        right: 10px;
        font-size: 22px;
        top:50%;
        transform: translate(0,-50%);
        }
        .svg-icon.wechat{
          margin-top: -4px;
          vertical-align: middle;
          margin-right: 4px;
          width: 20px;
          height: 20px;
          font-size: 20px;
          color: #26ca29;
        }
        .svg-icon.alipay{
          margin-top: -4px;
          vertical-align: middle;
          margin-right: 4px;
          width: 23px;
          height: 23px;
          font-size: 20px;
          color: #027be3;
        }
        input[type ='radio']{
          display: none
        }
        .weui-icon-circle{
          &::before{
            font-size: 22px;
            color:#d1d2d2;
          }
        }
        input[type ='radio']:checked + .weui-icon-circle{
         &::before{
           content: '\EA06';
           color:#027be3;
          font-size: 22px;
         }
        }
        .check_title{
          display: inline-block;
          color: #383838;
        }
      }
    }
    .tip{
      padding: 10px 15px;
      h2{
        color:#424040;
        font-size: 16px;
        font-weight: normal;
      }
      p{
        font-size: 14px;
        color:#888585;
      }
    }
    .btn{
      width: 73%;
      height: 40px;
      margin: 30px auto 0;
    }
}

@media (max-width:320px) {
  .recharge_box{
    .money_box{
     padding: 13px 5px;
   }
  }
}
</style>
