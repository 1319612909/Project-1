import router from './router'
import store from '@/store/index'
import { asyncRouterHandle } from '@/utils/asyncRouter';

import axios from 'axios'


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

let routeArr=[]

getsetAsyncRouter()
let asyncRouterFlag = 0
router.beforeEach((to, from, next) => {
if (!asyncRouterFlag) {
    asyncRouterFlag++
    store.dispatch('setAsyncRouter')
    setTimeout(()=>{
        //router.addRoutes  关键是把后台数据，处理以后的router格式，追加到router里面去，这样就可以进行路由跳转
        router.addRoutes(routeArr)  
        next({...to, replace: true })
    },3000)
   
}else{
    next()
}
         
})




 function getsetAsyncRouter(){
    let baseRouter = [{
        path: '/layout',
        name: 'layout',
        component: "view/layout/index.vue",
        meta: {
            title: "底层layout"
        },
        children: []
    }]
        let  asyncRouter =[]
   
    axios.get('./data/menu.json').then(res=>{
      asyncRouter = res.data.data.menus
    formatRouter(asyncRouter)
    baseRouter[0].children = asyncRouter
    baseRouter.push({
        path: '*',
        redirect: '/layout/404'

    })

    asyncRouterHandle(baseRouter)
    routeArr = baseRouter
     
})

       
}
