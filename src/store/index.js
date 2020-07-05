import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters'
import {todo}   from '@/store/modules/todo'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    todo
  },
  getters
})

export default store
