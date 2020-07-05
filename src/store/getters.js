const getters = {
    // routes: state => state.route.routes,
    // routerFlag: state => state.route.routerFlag,
    list:state => state.todo.list,
    textVal:state => state.todo.textVal,
    doneKey:state=> state.todo.doneKey,
    doneLength:state=>state.todo.list.filter(item=> item.done == false).length
  }
  export default getters
  