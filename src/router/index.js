import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import Index from '@/views/index.vue'
import Test from '@/components/test'
import elGriad from '@/components/el-griad'


Vue.use(VueRouter)

const routes = [
    { path: '/', component: Index },
    {
        path:'/helloWorld',
        component:HelloWorld
    },
    {
      path:'/test',
      component:Test
  },
    {
      path:'/elGriad',
      component:elGriad
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