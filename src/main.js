import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from '@/router'
import './plugins/element.js'
import Mock from '@/mock/index'

// import router from '@/router'

Vue.prototype.jsonUrl = './static/json/map.json';
new Vue({
  router,
  Mock,
  render: h => h(App)
}).$mount('#app')

