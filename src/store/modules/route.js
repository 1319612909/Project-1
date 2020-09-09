<<<<<<< HEAD
// import router from '@/router'
import { routes } from '@/router/index'

const app = {
  state: {
    routes: routes
  },
  mutations: {
    setroutes: (state, routes) => {
      if (state.lock) return
    },
    routerFlag: (state, flag) => {
      state.routerFlag = flag
    }
   
  },
  actions: {
=======

import axios from 'axios'
import router from '@/router'
import { asyncRouterHandle } from '@/utils/asyncRouter';

const routerList = []
const formatRouter = (routes) => {
  routes && routes.map(item => {
      if ((!item.children || item.children.every(ch => ch.hidden)) && item.name != '404') {
          routerList.push({ label: item.meta.title, value: item.name })
      }
      item.meta.hidden = item.hidden
      if (item.children && item.children.length > 0) {
          formatRouter(item.children)
      }
  })
}



export const route = {
  state: {
    routeList: [],
    asyncRouters:[]
  },
  mutations: {
    setRoutes: (state, data) => {
        state.routeList = data
    },
    routerFlag: (state, flag) => {
      state.routerFlag = flag
    },
    setAsyncRouter(state, asyncRouters) {
      state.asyncRouters = asyncRouters
    }
  },
  actions: {
    setAsyncRouter({commit}){
      const baseRouter = [{
        path: '/layout',
        name: 'layout',
        component: "views/layout/index.vue",
        meta: {
            title: "底层layout"
        },
        children: []
    }]
       
    let asyncRouter= []
        axios.get('./data/menu.json').then(res=>{
          // commit('asyncRouter',res.data.data.menus) 
          asyncRouter = res.data.data.menus
          asyncRouter.push({
            path: "404",
            name: "404",
            hidden: true,
            meta: {
                title: "迷路了*。*",
            },
            component: 'views/error.vue'
        })
        
       
        formatRouter(asyncRouter)

        baseRouter[0].children = asyncRouter
        baseRouter.push({
            path: '*',
            redirect: '/layout/404'
  
        })

        asyncRouterHandle(baseRouter)
        commit('setAsyncRouter', baseRouter)
        commit('setRoutes', routerList)
        // router.addRoutes(baseRouter)
        })
       
    
      // return true
    }
  },
  getters:{
>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815
  
  }
}

<<<<<<< HEAD
export default app

=======
>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815

