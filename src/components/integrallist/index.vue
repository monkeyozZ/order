<template>
  <div>
    <div class="integral_list">
      <div class="list_left">
        <p class="title">{{listTitle}}</p>
        <p class="time">{{time}}</p>
      </div>
      <div class="list_right">
        <p>{{num}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listTitle: {
      type: String
    },
    time: {
      type: String
    },
    num: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.integral_list{
  padding: 10px 13px;
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid #e2e2e2;
  .list_left{
    float: left;
    .title{
      font-size: 14px;
      color:#656464;
      line-height: 22px;
    }
    .time{
      font-size: 12px;
      color: #9d9d9d;
    }
  }
  .list_right{
    float: right;
    line-height: 41px;
    color:#656464;
  }
}
</style>
