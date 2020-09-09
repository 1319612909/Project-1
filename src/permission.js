import router from './router'
import store from '@/store/index'


let asyncRouterFlag = 0
router.beforeEach((to, from, next) => {
if (!asyncRouterFlag) {
    asyncRouterFlag++
    store.dispatch('setAsyncRouter')

    setTimeout(()=>{
    console.log()
    const routeArr = store.getters["asyncRouters"] 
        //router.addRoutes  关键是把后台数据，处理以后的router格式，追加到router里面去，这样就可以进行路由跳转
        router.addRoutes(routeArr)  
        next({...to, replace: true })
    },3000)
   
}else{
    next()
}
         
})



