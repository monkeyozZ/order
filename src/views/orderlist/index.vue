<template>
  <div>
      <tab :line-width="2" v-model="index">
        <tab-item class="vux-center" :selected="title === item" v-for="(item, index) in catearr" :class="{'vux-1px-r': index===0}" @click="title = item" :key="index">{{item}}</tab-item>
      </tab>
        <swiper v-model="index" :show-dots="false" class="order_container" :threshold="100">
          <swiper-item>
            <scroll ref="scroll" class="wrapper reset_bg"
            :data="user_info"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            @pullingDown="onPullingDown"
            @pullingUp="onPullingUp"
            :bounce="{bottom: false}">
              <flexbox justify="center">
                  <flexbox-item :span="11.168" class="item_box">
                      <div class="list_item" v-for="(item, index) in user_info" :key="index">
                        <router-link to="/order/details">
                          <div class="card_title">
                            <flexbox>
                                <flexbox-item :span="1.5"><p>{{item.name}}</p></flexbox-item>
                                <flexbox-item :span="2"><p>{{item.age}}</p></flexbox-item>
                                <flexbox-item :span="2.5" class="money"><p>{{item.money}}</p></flexbox-item>
                                <flexbox-item class="up_time"><p>{{item.time|transformTime}}</p></flexbox-item>
                            </flexbox>
                          </div>
                          <div class="person">
                            <flexbox :gutter="0" align="center">
                              <flexbox-item :span="0.08"><svg-icon icon-class='addrss'></svg-icon></flexbox-item>
                              <flexbox-item class="base_info"> <span>{{item.address}}</span> <span>{{item.job}}</span></flexbox-item>
                            </flexbox>
                            <flexbox :gutter="0" align="center">
                              <flexbox-item :span="0.08"><svg-icon icon-class='card'></svg-icon></flexbox-item>
                              <flexbox-item class="base_info">
                                <span>{{item.home}}</span>
                                <span>{{item.car}}</span>
                                <span>{{item.baodan}}</span>
                                <span>{{item.card}}</span>
                                <span>{{item.shebao}} </span>
                                <span>{{item.gongjijing}}</span>
                              </flexbox-item>
                            </flexbox>
                          </div>
                        </router-link>
                        <flexbox>
                          <flexbox-item  v-if="item.jifen >= 100">
                            <button class="order_btn order_btn_bule" @click="showdialong()">100积分兑换</button>
                          </flexbox-item>
                          <flexbox-item>
                            <button class="order_btn order_btn_yellow" @click="showfaildialong()">50J币抢单</button>
                          </flexbox-item>
                        </flexbox>
                      </div>
                  </flexbox-item>
              </flexbox>
            </scroll>
          </swiper-item>

          <swiper-item>
            <scroll ref="scroll" class="wrapper reset_bg"
            :data="user_info"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            @pullingDown="onPullingDown"
            @pullingUp="onPullingUp">
            <flexbox justify="center">
                <flexbox-item :span="11" class="item_box">
                  <div class="list_item" v-for="(item, index) in user_info" :key="index">
                    <div class="card_title">
                      <flexbox>
                          <flexbox-item :span="1.5"><p>{{item.name}}</p></flexbox-item>
                          <flexbox-item :span="2"><p>{{item.age}}</p></flexbox-item>
                          <flexbox-item :span="2.5" class="money"><p>{{item.money}}</p></flexbox-item>
                          <flexbox-item class="up_time"><p>{{item.time|transformTime}}</p></flexbox-item>
                      </flexbox>
                    </div>
                    <div class="person">
                      <flexbox :gutter="0" align="center">
                        <flexbox-item :span="0.08"><svg-icon icon-class='addrss'></svg-icon></flexbox-item>
                        <flexbox-item class="base_info"> <span>{{item.address}}</span> <span>{{item.job}}</span></flexbox-item>
                      </flexbox>
                      <flexbox :gutter="0" align="center">
                        <flexbox-item :span="0.08"><svg-icon icon-class='card'></svg-icon></flexbox-item>
                        <flexbox-item class="base_info">
                          <span>{{item.home}}</span>
                          <span>{{item.car}}</span>
                          <span>{{item.baodan}}</span>
                          <span>{{item.card}}</span>
                          <span>{{item.shebao}} </span>
                          <span>{{item.gongjijing}}</span>
                        </flexbox-item>
                      </flexbox>
                    </div>
                    <flexbox>
                      <flexbox-item  v-if="item.jifen >= 100">
                        <button class="order_btn order_btn_bule">100积分兑换</button>
                      </flexbox-item>
                      <flexbox-item>
                        <button class="order_btn order_btn_yellow">50J币抢单</button>
                      </flexbox-item>
                    </flexbox>
                  </div>
                </flexbox-item>
              </flexbox>
            </scroll>
          </swiper-item>
        </swiper>
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
import { Tab, TabItem, Swiper, SwiperItem, Flexbox, FlexboxItem, XButton, Confirm, XDialog } from 'vux'
import pullApi from '@/api/customer.js'
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    XButton,
    Confirm,
    XDialog
  },
  data () {
    return {
      catearr: [ '优选', '淘单' ],
      title: '优选',
      index: 0,
      /* user_info: [
        {
          name: '汪雷',
          age: '18岁',
          money: '3-5万',
          time: '刚刚',
          address: '重庆',
          job: '在职员工',
          home: '有按揭房',
          car: '有全款车',
          badan: '有保单',
          card: '有信用卡',
          shebao: '有社保',
          gongjijing: '有公积金',
          jifen: 100
        },
        {
          name: '汪**',
          age: '18岁',
          money: '3-5万',
          time: '刚刚',
          address: '重庆',
          job: '在职员工',
          home: '有按揭房',
          car: '有全款车',
          badan: '有保单',
          card: '有信用卡',
          shebao: '有社保',
          gongjijing: '有公积金',
          jifen: 50
        },
        {
          name: '陈**',
          age: '28岁',
          money: '3-5万',
          time: '刚刚',
          address: '重庆',
          job: '在职员工',
          home: '有按揭房',
          car: '有全款车',
          badan: '有保单',
          card: '有信用卡',
          shebao: '有社保',
          gongjijing: '有公积金',
          jifen: 80
        },
        {
          name: '陈**',
          age: '28岁',
          money: '3-5万',
          time: '刚刚',
          address: '重庆',
          job: '在职员工',
          home: '有按揭房',
          car: '有全款车',
          badan: '有保单',
          card: '有信用卡',
          shebao: '有社保',
          gongjijing: '有公积金',
          jifen: 80
        },
        {
          name: '陈**',
          age: '28岁',
          money: '3-5万',
          time: '刚刚',
          address: '重庆',
          job: '在职员工',
          home: '有按揭房',
          car: '有全款车',
          badan: '有保单',
          card: '有信用卡',
          shebao: '有社保',
          gongjijing: '有公积金',
          jifen: 80
        }
      ], */
      user_info: [],
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
      auth: true,
      pullDownRefresh: true,
      pullDownRefreshTxt: '刷新成功',
      pullDownRefreshThreshold: 65,
      pullDownRefreshStop: 40,
      pullUpLoad: true,
      pullUpLoadThreshold: 0,
      pullUpLoadMoreTxt: '数据加载中',
      pullUpLoadNoMoreTxt: '没有更多数据了'
    }
  },
  computed: {
    pullDownRefreshObj: function () {
      return this.pullDownRefresh ? {
        threshold: parseInt(this.pullDownRefreshThreshold),
        stop: parseInt(this.pullDownRefreshStop),
        txt: this.pullDownRefreshTxt
      } : false
    },
    pullUpLoadObj: function () {
      return this.pullUpLoad ? {
        threshold: parseInt(this.pullUpLoadThreshold),
        txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
      } : false
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
    },
    onPullingDown () { // 下拉刷新
      // 模拟更新数据
      /* setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          // this.items.unshift(this.$i18n.t('normalScrollListPage.newDataTxt') + +new Date())
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 2000) */
      pullApi.Datainit().then((res) => {
        // console.log(res)
        if (res.data) {
          console.log(res)
          this.user_info = res.data
        } else {
          this.$refs.scroll.forceUpdate()
        }
      })
    },
    onPullingUp () { // 上拉加载
      // 更新数据
      // console.log('pulling up and load data')
      /* setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          // let newPage = []
          // this.items = this.items.concat(newPage)
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1500) */
      pullApi.pull().then((res) => {
        if (res.data) {
          res.data.map((item) => {
            this.user_info = this.user_info.concat(item)
          })
        } else {
          this.$refs.scroll.forceUpdate()
        }
        // this.user_info = this.user_info.concat(res)
      })
    },
    rebuildScroll () {
      this.nextTick(() => {
        this.$refs.scroll.destroy()
        this.$refs.scroll.initScroll()
      })
    },
    initbaseData () {
      pullApi.Datainit().then((res) => {
        if (res.data) {
          this.user_info = res.data
        }
      })
    }
  },
  watch: {
    pullDownRefreshObj: {
      handler () {
        this.rebuildScroll()
      },
      deep: true
    },
    pullUpLoadObj: {
      handler () {
        this.rebuildScroll()
      },
      deep: true
    }
  },
  mounted () {
    this.initbaseData()
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/center.less';
.reset_bg{
  background-color: #f7f8fa!important;
}
  .order_container{
    background-color: #f7f8fa;
    height: e("calc(100vh - 143px)");
    .vux-swiper{
      height: 100%!important;
      /* overflow: auto!important; */
    }
  }
  .vux-flexbox-item{
  .list_item{
  background-color: #fff;
  box-shadow:0px 0px 8px 1px rgba(0,0,0,0.1);
  margin-top: 13px;
  padding: 0 10px;
  box-sizing: border-box;
  overflow: hidden;
  .card_title {
    height: 33px;
    border-bottom: 1px solid #ededee;
    color:#565757;
    p {
      font-size: 15px;
      line-height: 33px
    }
    .money{
      color: #f3a73b;
    }
    .up_time p{
    float: right;
  }
  }
  .person{
    .svg-icon{
      color:#4997f4;
      width: 18px;
      height: 18px;
      font-size:18px;
      vertical-align: -0.25em;
    }
    .base_info {
      color: #565757;
      span{
        font-size: 12px;
        line-height: 30px;
      }
    }
  }
  .order_btn{
    position: relative;
     width: 100%;
    display: block;
    margin: 8px 0 18px 0;
    padding:0 14px;
    border-width: 0;
    outline: 0;
    -webkit-appearance: none;
    box-sizing: border-box;
    font-size: 15px;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
    line-height: 2.33333333;
    border-radius: 5px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overflow: hidden;
  }
  .order_btn_yellow{
    background: linear-gradient( #fba629, #f49406);
  }
  .order_btn_bule{
    background: linear-gradient( #1389ef, #047ce2);
  }
  }
  }
  .item_box{
    padding-bottom: 13px;
  }

  .bg_reset{
    background-color: #b0b0b0!important;
    color: #484646!important;
  }
</style>
