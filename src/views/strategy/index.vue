<template>
  <div>
    <scroll ref="scroll" class="wrapper"
    :bounce="{top: false}">
    <div class="strategy_box">
      <h2 class="strategy_title">1、什么是积分？</h2>
      <p>积分是接单宝会员在使用接单宝的过程中参与实名认证、邀请好友、充值等相关活动时系统赠送的奖励。积分仅限于接单宝使用，如用户账号暂停使用，账号内的积分使用权益将被取消。</p>
      <h2 class="strategy_title">2、如何获取积分？</h2>
      <table>
        <thead>
          <tr>
            <th width="25%">获取方式</th>
            <th width="50%">操作内容</th>
            <th width="25%">分值（分）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>实名认证</td>
            <td>注册后完成实名认证</td>
            <td>100</td>
          </tr>
          <tr>
            <td>邀请好友</td>
            <td>成功邀请1名好友，并完成实名认证</td>
            <td>100</td>
          </tr>
          <tr>
            <td>充值</td>
            <td>充值金额兑换J币，获取积分</td>
            <td>10-500不等</td>
          </tr>
        </tbody>
      </table>
      <h2 class="strategy_title">3、积分有什么用？</h2>
      <p>积分可用于兑换部分销售线索。</p>
      <h2 class="strategy_title">4、积分有效期？</h2>
      <p>用户账户正常使用情况下均有效</p>
    </div>
    </scroll>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.wrapper{
  height: e('calc( 100vh - 46px)')
}
.strategy_box{
  padding: 10px;
  .strategy_title{
  font-size: 16px;
  color:#333333;
  font-weight: normal;
}
p{
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom:#f6f5f4;
  font-size: 14px;
  color:#7a7a7a;
}
table{
   border-collapse:collapse;
   font-size: 14px;
    color:#7a7a7a;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
thead{
background: #dfeffd;
}
tr{
  height: 35px;;
}
td,th{
  text-align:center;
  padding: 14px 0;
    border:1px solid #eaeaea;
}
}

</style>
