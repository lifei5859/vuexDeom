import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    goods: {},
    seller: {},
    ratings: {}
  },
  getters: {

  },
  mutations: {
    getData (state) {
      axios.get('./wocao/data').then(
        res => {
          if (res.data.code === 0) {
            state.goods = res.data.data.goods
            state.seller = res.data.data.seller
            state.ratings = res.data.data.ratings
            console.log(res)
          }
        }
      )
    }
  },
  actions: {
    asyncData (ctx) {
      ctx.commit('getData')
    }
  }
})
