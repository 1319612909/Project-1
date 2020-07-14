import Vue from 'vue'
import VueRouter from 'vue-router'

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
    { path: '/',
      name: 'layout', 
      component: () =>
        import ('@/views/layout/index.vue')
     }
     
  
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