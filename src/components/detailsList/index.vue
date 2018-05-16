<template>
  <div>
    <flexbox :gutter="0" class="details_item">
      <flexbox-item :span="6">
        <p>{{objkey}}</p>
      </flexbox-item>
      <flexbox-item :span="6">
        <p>{{objval}}</p>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import {Flexbox, FlexboxItem} from 'vux'
export default {
  props: ['objkey', 'objval'],
  components: {
    Flexbox,
    FlexboxItem
  }
}
</script>

<style lang="less" scoped>
.details_item{
  padding: 0 12px;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px solid #e6e5e2;
  .vux-flexbox-item{
    p{
      line-height: 30px;
      color: #515050;
      font-size: 14px;
    }
    &:first-child{
      p{
        float: left;
      }
    }
    &:last-child{
      p{
        float: right;
      }
    }
  }
}
</style>
