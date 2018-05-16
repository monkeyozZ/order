<template>
<scroll ref="scroll" class="wrapper"
    :pullDownRefresh="pullDownRefreshObj"
    :pullUpLoad="pullUpLoadObj"
    @pullingDown="onPullingDown"
    @pullingUp="onPullingUp">
  <div class="integral_box">
    <div class="residue_integral">
      <p class="integral_title">积分余额</p>
      <p class="integral_num">600</p>
    </div>

    <div class="integral_detail">
      <h1 class="detail_title"><svg-icon icon-class="jifen"></svg-icon>积分明细</h1>
      <v-list :listTitle="'邀请好友'" :time="'2018-05-11 14:44:30'" :num="'+200'"></v-list>
      <v-list :listTitle="'兑换订单'" :time="'2018-05-11 14:44:30'" :num="'-300'"></v-list>
      <v-list :listTitle="'邀请好友'" :time="'2018-05-11 14:44:30'" :num="'+200'"></v-list>
      <v-list :listTitle="'兑换订单'" :time="'2018-05-11 14:44:30'" :num="'-300'"></v-list>
      <v-list :listTitle="'邀请好友'" :time="'2018-05-11 14:44:30'" :num="'+200'"></v-list>
      <v-list :listTitle="'兑换订单'" :time="'2018-05-11 14:44:30'" :num="'-300'"></v-list>
      <v-list :listTitle="'邀请好友'" :time="'2018-05-11 14:44:30'" :num="'+200'"></v-list>
      <v-list :listTitle="'兑换订单'" :time="'2018-05-11 14:44:30'" :num="'-300'"></v-list>
      <v-list :listTitle="'邀请好友'" :time="'2018-05-11 14:44:30'" :num="'+200'"></v-list>
      <v-list :listTitle="'兑换订单'" :time="'2018-05-11 14:44:30'" :num="'-300'"></v-list>
      <v-list :listTitle="'邀请好友'" :time="'2018-05-11 14:44:30'" :num="'+200'"></v-list>
    </div>
  </div>
</scroll>
</template>

<script>
import list from '@/components/integrallist/index'
export default {
  components: {
    'v-list': list
  },
  data () {
    return {
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
      /* pullApi.Datainit().then((res) => {
        // console.log(res)
        if (res.data) {
          this.user_info = res.data
        } else {
          this.$refs.scroll.forceUpdate()
        }
      }) */
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
      /* pullApi.pull().then((res) => {
        if (res.data) {
          res.data.map((item) => {
            this.user_info = this.user_info.concat(item)
          })
        } else {
          this.$refs.scroll.forceUpdate()
        }
        // this.user_info = this.user_info.concat(res)
      }) */
    },
    rebuildScroll () {
      this.nextTick(() => {
        this.$refs.scroll.destroy()
        this.$refs.scroll.initScroll()
      })
    },
    initbaseData () {
      /* pullApi.Datainit().then((res) => {
        if (res.data) {
          this.user_info = res.data
        }
      }) */
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
  height: e('calc(100vh - 46px)');
  background: #f6f5f4;
}
.integral_box{
  background: #f6f5f4;
  min-height: e('calc(100vh - 46px)');
.residue_integral{
  text-align: center;
  padding: 10px 0;
  background: #fff;
  .integral_title{
  font-size: 14px;
  color:#5a5a5a;
}
.integral_num{
  font-size: 24px;
  color:#ff9801;
}
}
.integral_detail{
  .detail_title{
      padding-left: 10px;
      color:#656464;
      font-size: 16px;
      font-weight: normal;
      line-height: 32px;
      .svg-icon{
        color: #027be3;
        width: 25px;
        height: 25px;
        font-size: 18px;
        margin-right: 5px;
        vertical-align: middle;
      }
    }
}
}

</style>
