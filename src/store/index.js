import { createStore } from 'vuex'

import products from './modules/products'
import category from './modules/category'
import brands from './modules/brands'
import notification from './modules/notif'

export default createStore({
  state: {
    url: 'http://5.182.26.89:2023',
    loading: true
  },
  getters: {
    url(state){
      return state.url
    },
    loading(state){
      return state.loading
    }
  },
  mutations: {
    loading(state, payload){
      state.loading = payload
    }
  },
  actions: {
  },
  modules: {
    products, category, brands, notification
  }
})
