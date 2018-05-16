<template>
  <div class="auth_item_box">
    <h1 class="title"><svg-icon icon-class="card"></svg-icon>个人信息</h1>
    <group>
     <cell title="免冠照片" value="点击上传" is-link link="/person/personUploader"></cell>
     <x-input title="真实姓名" placeholder="必填" v-model="Formdata.username"></x-input>
     <x-input title="身份证号" placeholder="必填" type="tel" v-model="Formdata.idcard" :max="18"></x-input>
     <x-address title="所在城市" :list="addressData" placeholder="选择" v-model="Formdata.citycode"></x-address>
     <popup-picker title="机构类型" placeholder="选择" :data="organization" v-model="Formdata.type"></popup-picker>
     <x-input title="机构名称" placeholder="必填" v-model="Formdata.orgname"></x-input>
     <x-input title="所属营业厅" placeholder="必填" v-model="Formdata.area"></x-input>
    </group>
    <h1 class="title"><svg-icon icon-class="prove"></svg-icon>证明材料</h1>
    <group>
     <cell title="身份证" value="点击上传" is-link link="/person/idcardUploader"></cell>
     <cell title="资质证明" value="点击上传" is-link link="/person/zizhiauth"></cell>
    </group>
  </div>
</template>

<script>
import {Flexbox, FlexboxItem, Group, Cell, XButton, XInput, XAddress, ChinaAddressV4Data, PopupPicker} from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Cell,
    Group,
    XButton,
    XInput,
    XAddress,
    PopupPicker
  },
  data () {
    return {
      addressData: ChinaAddressV4Data,
      val: [],
      Formdata: {
        username: '',
        idcard: '',
        citycode: [],
        type: [],
        orgname: '',
        area: ''
      },
      organization: [['银行', '小贷公司', 'p2p网贷', '担保公司', '典当行', '其他']]
    }
  }
}
</script>

<style lang="less" scoped>
.auth_item_box{
  background: #f6f7f7;
  .title{
      padding-left: 10px;
      color:#424040;
      font-size: 16px;
      font-weight: normal;
      line-height: 43px;
      .svg-icon{
        color: #027be3;
        width: 25px;
        height: 25px;
        font-size: 18px;
        margin-right: 5px;
        vertical-align: middle;
      }
    }
  .weui-cell{
    background: #fff;
    font-size: 14px;
    .vux-label{
      font-size: 14px;
    }
  }
  .vux-cell-box{
    background: #fff;
    font-size: 14px;
  }
  .weui-input{
    text-align: right;
  }
}
</style>
