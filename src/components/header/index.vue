<template>
  <div>
    <x-header>
      <span style="font-size:16px">{{title}}</span>
      <x-icon slot="overwrite-left" type="ios-arrow-left" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </x-header>
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  components: {
    XHeader
  },
  data () {
    return {
      title: '抢单列表'
    }
  }
}
</script>

<style lang="less">
.vux-header .vux-header-left .left-arrow:before {
  border-color:#fff !important
}
</style>
