import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import Test from '@/components/test'


Vue.use(VueRouter)

const routes = [
    { path: '/', component: Test },
    {
        path:'/helloWorld',
        component:HelloWorld
    }
  ]


export default new VueRouter({
    routes 
  })

  
// export default new Router({
//     scrollBehavior: () => ({
//         y: 0
//     }),
//     routes: constantRouterMap
// })