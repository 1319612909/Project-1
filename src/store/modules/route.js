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
  
  }
}

export default app


