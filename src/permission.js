import router from './router'
import store from '@/store'
let asyncRouterFlag = 0
router.beforeEach((to, from, next) => {
if (!asyncRouterFlag) {
    asyncRouterFlag++
    store.dispatch('setAsyncRouter')
    
    console.log(store.getters)


    // const asyncRouters = store.getters.asyncRouters
    router.addRoutes(asyncRouters)
    next({...to, replace: true })
}else{
    next()
}
         
})