import Vue from 'vue'
import VueRouter from 'vue-router'

<<<<<<< HEAD
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
=======
// import HelloWorld from '@/components/HelloWorld.vue'
// import Layout from '@/views/layout'
// import One from '@/views/one.vue'
// import Test from '@/views/test'
// import Home from '@/views/layout/home'
// import Form from '@/views/form'
// import Export from '@/views/export'
// import Select from '@/views/select'
// import TodoList from '@/views/todoList'
// import slot from '@/views/slot'

Vue.use(VueRouter)

const routes = [
    // { path: '/',
    //   name: 'layout', 
    //   component: () =>
    //     import ('@/views/layout/index.vue')
    //  }
    // {
    //     path:'/',
    //     component:Layout,
    //     children:[{
    //       path: 'home',
    //       name: 'home',
    //       component: () =>
    //         import ('@/views/layout/home/index.vue')
    //     },
        
        // {
        //   path: 'form',
        //   name: 'form',
        //   component: () =>
        //     import ('@/views/layout/home/index.vue')
        // }
        
        // {
        //   path: 'export',
        //   name: 'export',
        //   component: Export,
        // },
        // {
        //   path:'select',
        //   name: 'select',
        //   component: Select,
        // },
        // {
        //   path:'todoList',
        //   name:'todoList',
        //   component:TodoList
        // },
        // {
        //   path:'slot',
        //   name:'slot',
        //   component:slot
        // }
      // ]
    // },
>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815
    
  ]


export default new VueRouter({
    routes 
  })
<<<<<<< HEAD

  
// export default new Router({
//     scrollBehavior: () => ({
//         y: 0
//     }),
//     routes: constantRouterMap
// })
=======
>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815
