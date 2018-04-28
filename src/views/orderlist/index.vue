<template>
  <div>
    <tab :line-width="2" v-model="index">
      <tab-item class="vux-center" :selected="title === item" v-for="(item, index) in catearr" :class="{'vux-1px-r': index===0}" @click="title = item" :key="index">{{item}}</tab-item>
    </tab>
          <swiper v-model="index" :show-dots="false" class="order_container">
            <swiper-item>
              <flexbox justify="center">
                  <flexbox-item :span="11.168">
                    <div class="list_item" v-for="(item, index) in user_info" :key="index">
                      <div class="card_title">
                        <flexbox>
                           <flexbox-item :span="1.5"><p>{{item.name}}</p></flexbox-item>
                           <flexbox-item :span="1.37"><p>{{item.age}}</p></flexbox-item>
                           <flexbox-item :span="2.14" class="money"><p>{{item.money}}</p></flexbox-item>
                           <flexbox-item class="up_time"><p>{{item.time}}</p></flexbox-item>
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
            </swiper-item>

            <swiper-item>
              <flexbox justify="center">
                  <flexbox-item :span="11">
                    <div class="list_item" v-for="(item, index) in user_info" :key="index">
                      <div class="card_title">
                        <flexbox>
                           <flexbox-item :span="1.5"><p>{{item.name}}</p></flexbox-item>
                           <flexbox-item :span="1.37"><p>{{item.age}}</p></flexbox-item>
                           <flexbox-item :span="2.14" class="money"><p>{{item.money}}</p></flexbox-item>
                           <flexbox-item class="up_time"><p>{{item.time}}</p></flexbox-item>
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
            </swiper-item>
          </swiper>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, Flexbox, FlexboxItem, XButton } from 'vux'
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    XButton
  },
  data () {
    return {
      catearr: [ '优选', '淘单' ],
      title: '优选',
      index: 0,
      user_info: [
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
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/center.less';
  .order_container{
    background-color: #f7f8fa;
    height: e("calc(100vh - 137px)");
    .vux-swiper{
      height: 100%!important;
      overflow: auto!important;
    }
  }
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
</style>
