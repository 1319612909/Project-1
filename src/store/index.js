import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters'
import {todo}   from '@/store/modules/todo'
import {route}   from '@/store/modules/route'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    todo,
    route
  },
  getters
})

export default store
