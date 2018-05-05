<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@media (max-width:320px) {
.weui-toast__content{
    font-size: 14px!important;
  }
.weui-toast.weui-toast_text{
      width: 55%!important;
  }
}

</style>
