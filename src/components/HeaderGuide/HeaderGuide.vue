<template>
    <div class="head-wrapper">
      <div class="content-wrapper">
          <img :src="seller.avatar" alt="">
        <div class="describe">
          <div class="title">
            <span class="brand"></span><span class="name">{{seller.name}}</span>
          </div>
          <div class="delivery">
            <span>{{seller.description}} / {{seller.deliveryTime}}分钟送达</span>
          </div>
          <div class="discounts-wrapper" v-if="seller.supports">
            <span class="icon" :class="supportsArr[ seller.supports[0].type ]"></span>
            <span class="discounts-text">{{ seller.supports[0].description }}</span>
          </div>
        </div>
      </div>
      <div class="bulletin-wrapper">
        <div class="bulletin">
          <span class="icon-bull"></span>
          <span class="bull-text">{{ seller.bulletin }}</span>
          <span class="particulars iconfont icon-enter"></span>
        </div>
      </div>
      <div class="background">
        <img :src="seller.avatar" alt="">
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
// import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      seller: state => state.seller
    })
  },
  created () {
    this.supportsArr = ['decrease', 'discount', 'guarantee', 'special', 'invoice']
    // axios.get('./wocao/data').then(
    //   res => {
    //     if (res.data.code === 0) {
    //       console.log(res)
    //       this.seller = res.data.data.seller
    //     }
    //   }
    // )
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "../../stylus/index.styl"
  .head-wrapper
    position relative
    /*top 0px*/
    overflow hidden
    width 100%
    .content-wrapper
      width 100%
      background-color rgba(7,17,27,0.5)
      >img
        float left
        margin-top 24px
        margin-left 24px
        height 64px
        width 64px
        border-radius 2px
    .describe
      margin-left 104px
      padding-top 26px
      .title
        .brand
          display inline-block
          width 30px
          height 18px
          bg-image('brand')
          background-size 30px 18px
          vertical-align top
        .name
          margin-left 6px
          font-size 16px
          color #fff
          line-height 18px
          font-weight bold
      .delivery
        margin-top 8px
        font-size 12px
        color #fff
        line-height 12px
    .discounts-wrapper
      margin-top 10px
      &::after
        content ""
        display block
      >.icon
        display inline-block
        width 12px
        height 12px
        background-size 12px 12px
        vertical-align middle
        &.decrease
          bg-image('decrease_2')
        &.discount
          bg-image('discount_2')
        &.guarantee
          bg-image('guarantee_2')
        &.special
          bg-image('special_2')
        &.invoice
          bg-image('invoice_2')
      .discounts-text
        font-size 10px
        color #fff
        font-weight 200
        line-height 24px
    .bulletin-wrapper
      height 28px
      width 100%
      .bulletin
        display flex
        height 28px
        width 100%
        background rgba(7,17,27,0.2)
        line-height 28px
        align-items center
        .icon-bull
          display inline-block
          height 12px
          width 20px
          bg-image('bulletin')
          vertical-align middle
          background-size 20px 12px
          margin-left 10px
        .bull-text
          margin-left 4px
          flex 1
          display inline-block
          white-space nowrap
          /*width 83%*/
          text-overflow ellipsis
          overflow hidden
          font-size 10px
          color #fff
          line-height 28px
          font-weight 200
          vertical-align middle
        .particulars
          display inline-block
          line-height 28px
          font-size 10px
          color #fff
          margin-left 4px
          margin-right 12px
    .background
      width 100%
      position absolute
      top 0
      z-index -1
      filter blur(10px)
      >img
        background-size cover
        width 100%
</style>
