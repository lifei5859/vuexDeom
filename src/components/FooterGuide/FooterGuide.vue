<template>
  <div class="foot-wrapper">
    <div class="content-wrapper">
      <div class="icon-wrapper">
        <div class="icon-box">
          <p>
            <i class="iconfont icon-gouwuchekong"></i>
          </p>
        </div>
      </div>
      <div class="charge-wrapper">
        <p class="charge"><span>￥{{charge}}</span></p>
        <p class="delivery-charge"><span>另需配送费￥{{seller.deliveryPrice}}元</span></p>
      </div>
      <div class="btn-wrapper">
        <p class="send-charge">
          <span>￥{{seller.minPrice}}起送</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      charge: 0
    }
  },
  computed: {
    ...mapState(['seller'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../stylus/index.styl"
  .foot-wrapper
    position absolute
    bottom 0
    width 100%
    .content-wrapper
      width 100%
      display flex
      background #141d27
      margin-top 10px
      .icon-wrapper
        flex 0 0 80px
        padding 0 18px 8px
        box-sizing border-box
        position relative
        .icon-box
          height 56px
          width 56px
          border-radius 50%
          position absolute
          bottom 2px
          background rgba(255,255,255,1)
          text-align center
          line-height 56px
          vertical-align middle
          box-sizing border-box
          border 6px solid #141d27
          >p
            position relative
            top 0
            background rgba(0,0,0,0.2)
            width 100%
            height 100%
            border-radius 50%
            >i
              display inline-block
              font-size 24px
              color rgba(255,255,255,0.4)
              line-height 24px
      .charge-wrapper
        flex 1
        display flex
        .charge
          margin  12px 0
          padding-right 12px
          vertical-align middle
          border-1px-right(rgba(255,255,255,0.1))
          >span
            font-size 16px
            color rgba(255,255,255,0.4)
            font-weight 700
            line-height 24px
        .delivery-charge
          flex 1
          padding 12px
          vertical-align middle
          >span
            font-size 12px
            color rgba(255,255,255,0.4)
            font-weight 400
            line-height 24px
      .btn-wrapper
        flex 0 0 105px
        background #000
        position relative
        .send-charge
          width 100%
          height 100%
          background rgba(0,0,0,0.2)
          vertical-align middle
          position relative
          >span
            width 100%
            height 100%
            display inline-block
            box-sizing border-box
            padding 12px 8px
            font-size 12px
            color rgba(255,255,255,0.4)
            font-weight 700
            line-height 24px
            text-align center
</style>
