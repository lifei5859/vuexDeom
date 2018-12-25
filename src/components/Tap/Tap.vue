<template>
 <div class="tap-wrapper">
   <div><span @click="goTo('/goods')" :class="{active: '/goods'===$route.path}">商品</span></div>
   <div><span @click="goTo('/comment')" :class="{active: '/comment'===$route.path}">评价</span></div>
   <div><span @click="goTo('/merchant')" :class="{active: '/merchant'===$route.path}">商家</span></div>
 </div>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      console.log(path)
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../stylus/index.styl"
  .tap-wrapper
    display flex
    height 40px
    line-height 40px
    border-1px(rgba(7,17,27,0.1))
    >div
      flex 1
      >span
        display block
        height 100%
        width 100%
        font-size 14px
        text-align center
      >span.active
        color rgb(240,20,20)
</style>
