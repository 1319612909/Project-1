import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import Index from '@/views/index.vue'
import One from '@/views/one.vue'
import Test from '@/views/test'
import Form from '@/views/form'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HelloWorld },
    {
        path:'/meat',
        component:Index,
        children:[{
          path: 'one',
          name: 'one',
          component: One,
        },
        {
          path: 'form',
          name: 'form',
          component: Form,
        },
        {
          path: 'test',
          name: 'test',
          component: Test,
        },
      ]
    },
    
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