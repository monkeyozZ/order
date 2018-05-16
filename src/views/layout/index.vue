<template>
<div>
  <v-header v-if="$route.path !== '/person/own'"></v-header>
  <router-view></router-view>
  <v-footer v-if="$route.path !== '/person/auth'
  && $route.path !== '/person/personUploader'
  && $route.path !== '/person/idcardUploader'
  && $route.path !== '/person/zizhiauth'
  && $route.path !== '/own/integral'
  && $route.path !== '/own/jcoin'
  && $route.path !== '/integral/strategy'
  && $route.path !== '/recharge/center'"></v-footer>
</div>
</template>

<script>
import header from '@/components/header/index'
import footer from '@/components/footer/index'
export default {
  components: {
    'v-header': header,
    'v-footer': footer
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
  html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
