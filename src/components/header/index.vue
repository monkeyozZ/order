<template>
  <div>
    <x-header>
      <span style="font-size:16px">{{header_text}}</span>
      <x-icon slot="overwrite-left" type="ios-arrow-left" size="35" @click="back" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      <a href="/integral/strategy" slot="right" v-if="$route.path == '/own/integral'">积分攻略</a>
    </x-header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { XHeader } from 'vux'

export default {
  components: {
    XHeader
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['header_text'])
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
.vux-header-right a{
  color:#fff!important
  }
</style>
