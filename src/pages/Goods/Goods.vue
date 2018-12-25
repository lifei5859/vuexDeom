<template>
<div class="goods-wrapper">
  <ul class="class-list">
    <li class="class" v-for="(items,index) in goods" :key="index">{{items.name}}</li>
  </ul>
  <div class="good-list">
    <ul class="good-title" v-for="(items,index) in goods" :key="index">
    <p>{{items.name}}</p>
      <li v-for="(item,index) in items.foods" :key="index">{{item.name}}</li>
    </ul>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Goods",
  computed: {
    ...mapState({
      goods: state => state.goods
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../stylus/index.styl"
  .goods-wrapper
    display flex
    .class-list
      width 80px
    .good-list
      flex 1
</style>
