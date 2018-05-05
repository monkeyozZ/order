<template>
<div>
  <div class="login_container">
    <div class="login_header">
      <img src="../../assets/login_header.png">
      <h1 class="login_title">登&nbsp;录</h1>
      <div class="logo">
        <img src="../../assets/logo.png" alt="logo">
      </div>
    </div>

    <div class="login_form">
      <flexbox :gutter="0" justify="center">
        <flexbox-item :span="8.8">
          <h1 class="title">接单宝</h1>
        </flexbox-item>
      </flexbox>
      <v-input :arr="form" ref="login" v-on:synchronize="synchronize"></v-input>
      <flexbox :gutter="0" justify="center">
        <flexbox-item :span="8.8">
          <x-button class="login_btn" @click.native="submitForm">登录</x-button>

          <div class="tip_box">
            <router-link to="/about" tag="a" class="forget">忘记密码？</router-link>
            <router-link to="/about" tag="a" class="goother">先去逛逛？</router-link>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>

  <div class="login_footer">
      <p>还没接单宝账号？<a href="/register" class="to_register">立即注册!</a></p>
  </div>
</div>
</template>

<script>
import input from '@/components/input/index'
import {Flexbox, FlexboxItem, XButton} from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    XButton,
    'v-input': input
  },
  data () {
    return {
      form: [
        {
          icon: 'Mobile',
          type: 'tel',
          name: 'phone',
          placetext: '请输入手机号',
          maxlength: 11,
          value: ''
        },
        {
          icon: 'password',
          type: 'password',
          name: 'password',
          placetext: '请输入密码',
          value: ''
        }
      ],
      formdata: {},
      isSubmit: false
    }
  },
  methods: {
    synchronize () {
      this.formdata = this.$refs.login.retformdata()
    },
    myalert (text) {
      this.$vux.toast.text(text, 'top')
    },
    submitForm () {
      let arr = Object.keys(this.formdata)
      let reg = /^(13[0-9]|14[5|7]|15[0-9]|17[0-9]|18[0-9])\d{8}$/
      if (arr.length === 0) {
        this.myalert('请填写账号密码')
        return false
      } else {
        if (this.formdata.phone === '') {
          this.myalert('请输入手机号')
          return false
        } else {
          let res = reg.test(this.formdata.phone)
          if (!res) {
            this.myalert('您输入的手机号有误')
            return false
          }
        }
        if (this.formdata.password === '') {
          this.isSubmit = false
          this.myalert('请输入密码')
        } else {
          this.isSubmit = true
        }
      }

      if (this.isSubmit) {
        this.myalert('success')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login_container{
  min-height: e("calc(100vh - 40px)");
.login_header{
  position: relative;
  font-size: 0;
  img{
    display: inline-block;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
  .login_title{
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
.login_form{
  margin-top:60px;
  .title{
    font-size: 25px;
    color: #0b84ea;
    font-weight: normal;
    text-align: center;
  }
  .login_btn{
    margin-top: 32px;
  }
  .tip_box{
    overflow: hidden;
    margin-top: 5px;
    .forget{
    float: left;
    color: #7e8082;
    font-size: 14px;
  }
  .goother{
    float: right;
    color: #7e8082;
    font-size: 14px;
  }
  }
}
}
.login_footer{
  height: 40px;
  p{
    text-align: center;
    a{
      color:#328fe8;
    }
  }
}

</style>
