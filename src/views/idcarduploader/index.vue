<template>
  <div>
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <div class="weui-uploader">
            <div class="weui-uploader__hd">
              <p class="weui-uploader__title">我们将会在<span class="set_color">24小时内</span>完成审核<br>你的信息仅用于审核，我们将为您严格保密</p>
            </div>
            <div class="weui-uploader__bd">
              <flexbox :gutter="0" justify="center">
                <flexbox-item :span="9.52" style="margin-left:-5px!important;">
                  <flexbox :gutter="0">
                    <flexbox-item :span="6">
                      <div class="weui-uploader__input-box" ref="uploaderBox">
                        <input name="file" id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple=""/>
                        <p class="uploader_tetx">请上传身份证<span class="set_color">正面</span></p>
                      </div>
                    </flexbox-item>
                    <flexbox-item :span="6">
                      <div class="weui-uploader__input-box" ref="uploaderBox">
                        <input name="file" id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple=""/>
                        <p class="uploader_tetx">请上传身份证<span class="set_color">反面</span></p>
                      </div>
                    </flexbox-item>
                  </flexbox>
                </flexbox-item>
              </flexbox>
            </div>
          </div>
        </div>
      </div>
    </div>
    <x-button class="btn" @click.native="choose">提交审核</x-button>
  </div>
</template>

<script>
import {Flexbox, FlexboxItem, XButton} from 'vux'
import wx from 'weixin-js-sdk'
export default {
  components: {
    XButton,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
    }
  },
  mounted () {
    /* wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: 'wx0accb560b3e95e88', // 必填，公众号的唯一标识
      timestamp: 'timestamp', // 必填，生成签名的时间戳
      nonceStr: 'nonceStr', // 必填，生成签名的随机串
      signature: 'signature', // 必填，签名
      jsApiList: ['chooseImage', 'previewImage', 'uploadImage'] // 必填，需要使用的JS接口列表
    }) */
  },
  methods: {
    choose () {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          let localIds = res.localIds // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          console.log(localIds)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/weui/widget/weui-uploader/index.less';
.weui-cell{
  padding: 0!important;
}
.weui-uploader{
padding-top: 18px;
}
.weui-uploader__input-box{
    width: 90%!important;
    height: 88px!important;
    float: none!important;
    margin: 23px auto 30px!important;
    background: #fff;
    border:1px dashed #D9D9D9!important;
    .uploader_tetx{
      position: absolute;
      width: 100%;
      text-align: center;
      left: 50%;
      bottom: 15%;
      transform: translate(-50%,0);
      font-size: 12px;
      color:#7a7a7a;
    }
    &::before{
      top: 40%;
      height: 23px;
    }
    &::after{
      top: 40%;
      width: 23px;
    }
  }
  .weui-uploader__title{
      text-align: center;
      font-size: 14px;
    }
    .btn{
      width: 73.3%;
      margin: 30px auto 0px;
      height: 40px;
    }
    .set_color{
      color:#0a8bf3;
    }
</style>
