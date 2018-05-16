<template>
  <div id="app">
    <loading v-model="isLoading" :text="'加载中'"></loading>
    <router-view/>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    Loading
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@media (max-width:320px) {
.weui-toast__content{
    font-size: 14px!important;
  }
.weui-toast.weui-toast_text{
      width: 55%!important;
  }
}
  .weui-btn{
    font-size: 15px!important;
  }
  .weui-dialog{
    border-radius: 5px!important;
  }
  .weui-dialog__ft{
    background-color: #f0f0f0;
    color:#888888;
  }
  .weui-dialog__btn_primary{
    color: #0178df!important;
  }
  .weui-dialog__ft{
    line-height: 40px!important;
    font-size: 15px!important;
  }
  .weui-dialog__bd:first-child {
    padding: 1.5em 20px 0em!important;
    font-size: 16px;
  }
  .fail{
    color: #fb4b3e!important;
  }
  .success{
    color: #949493;
  }
  .dialong_box{
    padding-bottom: 10px;
  }
  .s_title{
    height: 40px;
    background-color: #f8f8f7;
    p{
      color: #ff9801;
      line-height: 40px;
    }
  }
  .s_content{
    margin: 10px 0 25px 0;
    color: #949493;
    padding: 0 20px;
    font-size: 14px;
  }
  .weui-cells{
    margin-top: 0!important;
      background: #f7f8fa!important;
  }
  .weui-input{
    width: 96%!important;
    text-align: right;
  }
  .weui-input::-webkit-input-placeholder{
    color: #999999!important;
  }
  .vux-cell-value{
    color: #000!important;
  }
  .weui-cells_radio .weui-check:checked + .weui-icon-checked:before{
  content: '\EA06'!important;
}
</style>
