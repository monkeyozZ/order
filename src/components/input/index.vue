<template>
  <div class="input_box">
    <Flexbox :gutter="0" justify="center">
      <flexbox-item :span="8.8">
        <Flexbox :gutter="0" justify="center" v-for="(item, index) in arr" :key="index" class="input_item">
          <flexbox-item>
            <svg-icon :icon-class="item.icon"></svg-icon>
          </flexbox-item>
          <flexbox-item :span="item.code?7:11">
            <input :type="item.type" :placeholder="item.placetext" :maxlength="item.maxlength" v-model="item.value">
          </flexbox-item>
          <flexbox-item :span="4" v-if="item.code">
            <button class="get_code" @click="getcode" ref="btn" :disabled="abled">{{code_text}}</button>
          </flexbox-item>
        </Flexbox>
      </flexbox-item>
    </Flexbox>
  </div>
</template>

<script>
import {Flexbox, FlexboxItem} from 'vux'
export default {
  props: ['arr'],
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      code_text: '获取验证码',
      formdata: {},
      abled: false
    }
  },
  watch: {
    'arr': {
      handler () {
        this.$emit('synchronize')
      },
      deep: true
    }
  },
  methods: {
    retformdata () {
      this.arr.map((item) => {
        this.formdata[item.name] = item.value
      })
      return this.formdata
    },
    getcode () {
      if (this.formdata.phone) {
        let reg = /^(13[0-9]|14[5|7]|15[0-9]|17[0-9]|18[0-9])\d{8}$/
        const res = reg.test(this.formdata.phone)
        if (res) {
          // 发短信
          let num = 30
          let time = setInterval(() => {
            num--
            this.code_text = num + 's后获取'
            this.abled = true
            if (num === 0) {
              clearInterval(time)
              this.code_text = '获取验证码'
              this.abled = false
            }
          }, 1000)
        } else {
          this.$vux.toast.text('手机号格式错误', 'top')
        }
      } else {
        this.$vux.toast.text('请填写手机号', 'top')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.input_box{
  margin-top: 25px;
  input{
    display: inline-block;
    width: 100%;
    border: none;
    font-size: 14px;
    outline: none;
    line-height: 38px;
  }
  .svg-icon{
    color: #7e8082;
  }
  .input_item{
    border-bottom:1px solid #b5b7b9;
    padding-left: 10px;
    margin-top: 15px;
    box-sizing: border-box
  }
  .get_code{
    display: inline-block;
    width: 100%;
    font-size: 14px;
    color: #4594f7;
    text-align: center;
    border: none;
    outline: none;
    background: inherit;
  }
}
@media (max-width: 320px) {
  .input_box{
    .input_item{
       margin-top: 10px;
    }
  }
}
</style>
