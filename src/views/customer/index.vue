<template>
  <div>
    <scroll ref="scroll" class="wrapper"
          :data="user_info"
          :pullDownRefresh="pullDownRefreshObj"
          :pullUpLoad="pullUpLoadObj"
          @pullingDown="onPullingDown"
          @pullingUp="onPullingUp">
      <flexbox justify="center">
      <flexbox-item :span="11.168">
        <div class="list_item" v-for="(item, index) in user_info" :key="index">
          <router-link to="/customer/details">
            <div class="card_title">
              <flexbox>
                  <flexbox-item :span="1.5"><p>{{item.name}}</p></flexbox-item>
                  <flexbox-item :span="2"><p>{{item.age}}</p></flexbox-item>
                  <flexbox-item class="money"><p>{{item.money}}</p></flexbox-item>
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
            <div class="card_footer">
              <flexbox :gutter="0" align="center">
                <flexbox-item :span="6" class="order_time">
                  <p>{{item.time|transformTime}}</p>
                </flexbox-item>
                <flexbox-item :span="6" class="order_money">
                  <p>3</p>
                </flexbox-item>
              </flexbox>
            </div>
           </router-link>
        </div>
      </flexbox-item>
    </flexbox>
    </scroll>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
import pullApi from '@/api/customer.js'
export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      /* user_info: [
        {
          name: '侯**',
          age: '18岁',
          money: '3-5万',
          time: '2018-05-04 14:59:30',
          address: '武汉',
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
          name: '汪雷',
          age: '18岁',
          money: '3-5万',
          time: '2018-05-04 14:23:30',
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
          time: '2018-05-04 11:37:30',
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
          time: '2018-05-01 13:37:30',
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
          time: '2018-05-01 13:37:30',
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

<style lang="less" scoped>
.wrapper{
  height: e('calc(100vh - 99px)')!important;
  .list_item{
  background-color: #fff;
  box-shadow:0px 0px 8px 1px rgba(0,0,0,0.1);
  margin-top: 13px;
  padding: 0!important;
  box-sizing: border-box;
  overflow: hidden;
  .card_title {
    padding: 0 10px;
    height: 33px;
    color:#565757;
    background: #f2f2f2;
    p {
      font-size: 15px;
      line-height: 33px
    }
    .money p{
      float: right;
      color: #f3a73b;
    }
  }
  .person{
    padding: 0 10px;
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
  .card_footer{
    height: 29px;
    padding: 0 10px;
    border-top: 1px solid #ededee;
    .order_time p{
      float: left;
      font-size: 12px;
      color: #9c9d9d;
      line-height: 30px;
    }
    .order_money p{
      float: right;
      font-size: 12px;
      color: #9c9d9d;
      line-height: 30px;
    }
  }
  }
}
</style>
