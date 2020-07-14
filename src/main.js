import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
import router from '@/router'
// import './plugins/element.js'
import Mock from '@/mock/index'
import store  from '@/store/index'
// import router from '@/router'
import '@/permission'
Vue.prototype.jsonUrl = './static/json/map.json';
new Vue({
  router,
  Mock,
  store,
  render: h => h(App)
}).$mount('#app')

