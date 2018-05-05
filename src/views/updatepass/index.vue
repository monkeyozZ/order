<template>
<div>
<div class="register_container">
    <div class="register_header">
      <div class="logo">
        <img src="../../assets/logo.png" alt="logo">
      </div>
    </div>

    <div class="register_form">
      <flexbox :gutter="0" justify="center">
        <flexbox-item :span="8.8">
          <h1 class="title">接单宝</h1>
        </flexbox-item>
      </flexbox>
      <v-input :arr="form" ref="register" v-on:synchronize="synchronize"></v-input>
      <flexbox :gutter="0" justify="center">
        <flexbox-item :span="8.8" class="btn_box">
          <x-button class="register_btn" @click.native="submitForm">确定</x-button>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</div>
</template>

<script>
import input from '@/components/input/index'
import {Flexbox, FlexboxItem, XButton, CheckIcon} from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    XButton,
    'v-input': input,
    CheckIcon
  },
  data () {
    return {
      form: [
        {
          icon: 'Mobile',
          type: 'tel',
          name: 'phone',
          placetext: '请输入手机号',
          value: '',
          maxlength: 11
        },
        {
          icon: 'code',
          type: 'tel',
          name: 'code',
          placetext: '请输入短信验证码',
          value: '',
          maxlength: 4,
          code: true
        },
        {
          icon: 'password',
          type: 'password',
          name: 'password',
          placetext: '请输入密码',
          value: ''
        },
        {
          icon: 'password',
          type: 'password',
          name: 'password2',
          placetext: '请重新输入密码',
          value: ''
        }
      ],
      formdata: {}
    }
  },
  computed: {
  },
  methods: {
    synchronize () {
      this.formdata = this.$refs.register.retformdata()
    },
    myalert (text) {
      this.$vux.toast.text(text, 'top')
    },
    submitForm () {
      let arr = Object.keys(this.formdata)
      let reg = /^(13[0-9]|14[5|7]|15[0-9]|17[0-9]|18[0-9])\d{8}$/
      if (arr.length === 0) {
        this.myalert('请填写表单信息')
        return false
      } else {
        if (this.formdata.phone === '') {
          this.myalert('请填写手机号')
          return false
        } else {
          let res = reg.test(this.formdata.phone)
          if (!res) {
            this.myalert('手机号格式有误')
            return false
          }
        }

        if (this.formdata.code === '') {
          this.myalert('请填写验证码')
          return false
        }

        if (this.formdata.password === '') {
          this.myalert('请填写密码')
          return false
        }
        if (this.formdata.password2 === '') {
          this.myalert('请再次填写密码')
          return false
        } else {
          if (this.formdata.password !== this.formdata.password2) {
            this.myalert('两次填写密码不一致')
            return false
          } else {
            this.myalert('success')
          }
        }
      }
    }
  }
}
</script>

<style lang="less">
.register_container{
.register_header{
  position: relative;
  font-size: 0;
  height: 100px;
  img{
    display: inline-block;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
  .register_title{
    position: absolute;
    left: 50%;
    top:40%;
    transform: translate(-50%,0);
    font-size: 25px;
    font-weight: normal;
    color: #fff
  }
  .logo{
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 52%);
    width: 115px;
    height: 115px;
    background: #fff;
    border-radius: 50%;
  }
}
.register_form{
  margin-top:60px;
  padding-bottom: 60px;
  .title{
    font-size: 25px;
    color: #0b84ea;
    font-weight: normal;
    text-align: center;
  }
  .btn_box{
    text-align: left;
    .register_btn{
    margin-top: 32px;
  }
  .agree_box {
    margin-top: 5px;
    color: #7e8082;
    font-size: 12px;
    a{
      color: #027be2;
    }
  }
  }
}
}
@media (max-width:320px) {
  .register_container{
    .register_header{
      height: 80px;
    }
    .register_form{
      margin-top: 10px;
    }
  }
}
.weui-icon-circle,.weui-icon-success,.weui-icon-success-circle{
  font-size: 20px!important;
  color: #1792f4!important;
}
.vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before{
  font-size: 20px!important;
  color: #1792f4!important;
}
[class^="weui-icon-"]:before, [class*=" weui-icon-"]:before{
  margin: 0!important;
}
</style>
