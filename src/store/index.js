import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters'
import {todo}   from '@/store/modules/todo'
<<<<<<< HEAD
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    todo
=======
import {route}   from '@/store/modules/route'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    todo,
    route
>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815
  },
  getters
})

export default store
