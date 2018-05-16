<template>
  <div>
    <div class="avt_box">
      <flexbox :gutter="0" justify="center" class="avt_col">
        <flexbox-item :span="2.112" class="avt_row">
          <svg-icon :icon-class='info.appSex|isman' class="avt"></svg-icon>
        </flexbox-item>
      </flexbox>
      <flexbox :gutter="0" justify="center">
        <flexbox-item :span="4.08">
          <p class="name_box">{{info.username}}<span class="sex">{{info.appSex|isSex}}</span></p>
        </flexbox-item>
      </flexbox>
      <flexbox :gutter="0" justify="center">
        <flexbox-item :span="9">
          <flexbox :gutter="0" justify="center" class="info_tab">
            <flexbox-item :span="3.5">
              <svg-icon icon-class='addrss'></svg-icon>
              <span>{{info.cityname}}</span>
            </flexbox-item>
            <flexbox-item :span="5">
              <svg-icon icon-class='card'></svg-icon>
              <span>{{info.occupation}}</span>
            </flexbox-item>
            <flexbox-item :span="3.5">
              <svg-icon icon-class='money'></svg-icon>
              <span>{{info.loanMoney}}</span>
            </flexbox-item>
          </flexbox>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="grade_time">
      <flexbox :gutter="0">
        <flexbox-item :span="6">
          <div class="order_grade">
            <span>订单等级：</span>
            <svg-icon icon-class='Star' v-for="(item, index) in info.dataLevel" :key="index"></svg-icon>
          </div>
        </flexbox-item>
        <flexbox-item :span="6">
          <div class="order_grade">
            <span>申请时间：{{info.registration_time}}</span>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {Flexbox, FlexboxItem} from 'vux'
Vue.filter('isSex', function (text) {
  if (text === 'M') {
    return '男士'
  } else if (text === 'F') {
    return '女士'
  }
})
Vue.filter('isman', function (text) {
  if (text === 'M') {
    return 'man'
  } else if (text === 'F') {
    return 'woman'
  }
})
export default {
  props: ['info'],
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.avt_box{
  height: 138px;
  background: linear-gradient(#027be3,#046fcb);
  overflow: hidden;
  .sex{
    font-size: 12px;
    margin-left: 10px;
  }
  .avt_col{
    margin-top: 10px;
    .avt_row{
      height: 66px;
      border-radius: 50%;
      background: #fff;
      overflow: hidden;
      .avt{
      display: inline-block;
      max-width: 100%;
      width: 100%;
      height: 100%;
    }
    }
  }
  .name_box{
    margin-top: 5px;
    text-align: center;
    color: #fff;
    font-size: 16px;
  }
  .info_tab {
    margin-top: 8px;
    .vux-flexbox-item{
      position: relative;
      text-align: center;
      color:#fff;
      font-size: 14px;
      &::after{
        position: absolute;
        top:50%;
        right: 0;
        transform: translate(0,-50%);
        content: '';
        width: 1px;
        height: 70%;
        background: #fff;
      }
      &:last-child{
        width: 0;
       &::after{
         width: 0;
       }
      }
    }
  }
}
.grade_time{
  background: linear-gradient( #027be3,#046fcb);
  .order_grade{
    .svg-icon{
      width:12px;
      height: 12px;
      margin-right: 2px;
      font-size: 12px;
      color:#faad3d;
    }
    span{
      display: inline-block;
      color:#fff;
      font-size: 12px;
      line-height: 32px;
    }
  }
  .vux-flexbox-item{
      text-align: center;
    }
}
 @media (max-width:360px) {
    .avt_box{
      .avt_col{
        .avt_row{
          height: 63px;
        }
      }
    }
  }

   @media (max-width:320px) {
    .avt_box{
      .avt_col{
        .avt_row{
          height: 56px;
        }
      }
    }
  }
</style>
