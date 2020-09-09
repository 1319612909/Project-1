const getters = {
<<<<<<< HEAD
    // routes: state => state.route.routes,
=======
    routeList: state => state.route.routeList,
    asyncRouters:state => state.route.asyncRouters,
>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815
    // routerFlag: state => state.route.routerFlag,
    list:state => state.todo.list,
    textVal:state => state.todo.textVal,
    doneKey:state=> state.todo.doneKey,
    doneLength:state=>state.todo.list.filter(item=> item.done == false).length
  }
  export default getters
  