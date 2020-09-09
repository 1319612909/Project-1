import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
<<<<<<< HEAD
Vue.use(ElementUI);
Vue.config.productionTip = false
import router from '@/router'
// import './plugins/element.js'
import Mock from '@/mock/index'
import store  from '@/store/index'
// import router from '@/router'
=======
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

>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815

Vue.prototype.jsonUrl = './static/json/map.json';
new Vue({
  router,
  Mock,
  store,
  render: h => h(App)
}).$mount('#app')

