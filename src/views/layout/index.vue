<template>
<div>
  <v-header></v-header>
  <router-view></router-view>
  <v-footer></v-footer>
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
