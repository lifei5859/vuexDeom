import Vue from 'vue'
import Router from 'vue-router'
import Comment from '../pages/Comment/Comment'
import Goods from '../pages/Goods/Goods'
import Merchant from '../pages/Merchant/Merchant'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/comment',
      component: Comment
    },
    {
      path: '/merchant',
      component: Merchant
    }
  ]
})
