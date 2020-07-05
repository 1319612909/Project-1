import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import Index from '@/views/index.vue'
import One from '@/views/one.vue'
// import Test from '@/views/test'
import Form from '@/views/form'
import Export from '@/views/export'
import Select from '@/views/select'
import TodoList from '@/views/todoList'
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Index },
    {
        path:'/',
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
          path: 'export',
          name: 'export',
          component: Export,
        },
        {
          path:'select',
          name: 'select',
          component: Select,
        },
        {
          path:'todoList',
          name:'todoList',
          component:TodoList
        }
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