<template>
  <div>
    <x-header>
      <span style="font-size:16px">{{headertext}}</span>
      <x-icon slot="overwrite-left" type="ios-arrow-left" size="35" @click="back" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </x-header>
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  props: ['headertext'],
  components: {
    XHeader
  },
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="less">
.vux-header .vux-header-left .left-arrow:before {
  border-color:#fff !important
}
.vux-header{
    z-index: 9999;
  }
</style>
