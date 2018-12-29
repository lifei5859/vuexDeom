<template>
<div class="goods-wrapper">
  <div class="class-list" ref="goodsWrapper">
    <div>
      <div class="class" v-for="(items,index) in goods" :key="index" :class="{active:clickIndex === index }" @click="scrollList(index,$event)">
        <div class="text-wrapper border-1px">
          <span class="icon-supports" v-if="items.type>0" :class="supportsArr[items.type]"></span>
          <span class="text">{{items.name}}</span></div>
      </div>
    </div>
  </div>
  <div class="good-list" ref="foodWrapper">
    <div>
      <ul class="good-wrapper" v-for="(items,index) in goods" :key="index">
        <p class="good-title"><span>{{items.name}}</span></p>
        <li class="good-item" v-for="(item,index) in items.foods" :key="index">
          <div>
            <div class="good-icon">
              <img :src="item.image" alt="">
            </div>
            <div class="good-describe">
              <span class="good-name">{{item.name}}</span>
              <p class="good-name2" v-if="item.description"> {{item.description}} </p>
              <p class="good-sales"><span>月售{{ item.sellCount }}份</span> <span>好评率{{ item.rating }}%</span></p>
              <p class="good-cost"><span>￥</span><span>{{ item.price }}</span> <span v-if="item.oldPrice">￥</span><span v-if="item.oldPrice">{{ item.oldPrice }}</span></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import BrScroll from 'better-scroll'
import Vue from 'vue'
export default {
  name: 'Goods',
  data () {
    return {
      heightList: [],
      scrollY: 0,
      foodList: []
    }
  },
  computed: {
    ...mapState({
      goods: state => state.goods
    }),
    clickIndex () {
      this.scrollY
      for (let i = 0; i < this.heightList.length; i++) {
        let height1 = this.heightList[i]
        let height2 = this.heightList[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          console.log('clickIndex()', i, height2)
          return i
        }
      }
      return 0
    }
  },
  methods: {
    scrollList (index, $event) {
      if (!$event._constructed) {
        return
      } else {
        let foodList = this.$refs.foodWrapper.getElementsByClassName('good-wrapper')
        this.scroll2.scrollToElement(foodList[index], 300)
      }
    },
    _initScroll () {
      this.scroll1 = new BrScroll(this.$refs.goodsWrapper, {
        click: true
      })
      this.scroll2 = new BrScroll(this.$refs.foodWrapper, {
        click: true,
        probeType: 3
      })
      this.scroll2.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
        console.log(this.scrollY)
      })
      console.log(this.scroll1, this.scroll2)
    },
    _comHeight () {
      this.foodList = [...this.$refs.foodWrapper.getElementsByClassName('good-wrapper')]
      let height = 0
      this.heightList.push(height)
      console.log('asdasd',this.foodList,this.foodList.length)
      // let foodList2 = [...this.foodList]
      // for (let i = 0; i < foodList.length; i++) {
      //   let item = foodList[i]
      //   height += item.clientHeight
      //   this.heightList.push(height)
      //   console.log(foodList.length)
      // }
      console.log(this.foodList)
      this.foodList.forEach((item) => {
        height += item.clientHeight
        this.heightList.push(height)
        console.log(this.heightList)
      })
      console.log('wojiucaole')
    }
  },
  updated () {
    if (this.foodList.length === 0) {
      this._comHeight()
    }
  },
  created () {
    this.supportsArr = ['decrease', 'discount', 'guarantee', 'special', 'invoice']
    Vue.nextTick(() => {
      this._initScroll()
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../stylus/index.styl"
  .goods-wrapper
    display flex
    position relative
    overflow hidden
    height 450px
    .icon-supports
      display inline-block
      vertical-align top
      height 14px
      width 14px
      background-size 14px 14px
      &.decrease
        bg-image('decrease_3')
      &.discount
        bg-image('discount_3')
      &.guarantee
        bg-image('guarantee_3')
      &.special
        bg-image('special_3')
      &.invoice
        bg-image('invoice_3')
    .class-list
      flex 0 0 80px
      width 80px
      .class:last-child>div::after
        display none
      .class
        padding 0 12px
        line-height 16px
        background #f3f5f7
        font-size 0
        font-weight 200
        &.active
          background #fff
          font-weight 700
        &.active>div::after
          display none
        .text
          font-size 12px
          color rgb(20,20,20)
          text-align center
          line-height 14px
        .text-wrapper
          height 54px
          display table-cell
          vertical-align middle
          width 56px
          border-1px(rgba(7,17,27,0.1))
    .good-list
      flex 1
      height 100%
      overflow hidden
      .good-icon
        width 60px
        height 60px
        position relative
        float left
        >img
          width 100%
          height 100%
      .good-wrapper
        position relative
        overflow hidden
        >li:last-child>div::after
          display none
        .good-title
          height 26px
          width 100%
          background #f3f5f7
          color rgb(147,153,159)
          font-size 12px
          line-height 26px
          border-left 2px solid #d9dde1
          >span
            margin-left 14px
        .good-item
          position relative
          overflow hidden
          padding 0 16px
          box-sizing border-box
          >div
            position relative
            overflow hidden
            padding 16px 0
            border-1px(rgba(7,17,27,0.1))
          .good-describe
            margin-left 78px
            margin-top 2px
            .good-name
              font-size 14px
              color rgb(7,17,27)
              line-hright 14px
            .good-name2,.good-sales
              margin-top 8px
              color rgb(147,153,159)
              font-size 10px
              line-height 10px
            .good-cost
              margin-top 8px
              >span:nth-of-type(2),>span:nth-of-type(1)
                color rgb(240,20,20)
                line-height 24px
              >span:nth-of-type(1)
                font-size 10px
                font-weight normal
              >span:nth-of-type(2)
                font-size 14px
                font-weight 700
              >span:nth-of-type(3),>span:nth-of-type(4)
                font-size 10px
                color rgb(147,153,159)
                line-height 24px
                text-decoration line-through
              >span:nth-of-type(3)
                font-weight normal
              >span:nth-of-type(4)
                font-weight 700
</style>
