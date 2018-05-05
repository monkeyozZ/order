<template>
<div>
  <v-header :headertext="title"></v-header>
  <router-view></router-view>
  <v-footer :curselect = "curselect"></v-footer>
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
      title: '',
      curselect: ''
    }
  },
  beforeMount () {
    this.title = this.$route.meta.headertext
    this.curselect = this.$route.name
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
