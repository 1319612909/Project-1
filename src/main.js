import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/index.css'
import echarts from 'echarts'
import router from '@/router'
import Mock from '@/mock/index'
import store  from '@/store/index'
import '@/permission'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

// import './plugins/element.js'


Vue.prototype.jsonUrl = './static/json/map.json';
new Vue({
  router,
  Mock,
  store,
  render: h => h(App)
}).$mount('#app')

