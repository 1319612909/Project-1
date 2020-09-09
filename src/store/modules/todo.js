
  import axios from 'axios'
  export const todo = {
    // namespaced: true,
    state:{
        list:[],
        textVal:'',
        nextId:4,
        doneKey:'all'
    },
    mutations:{
        initList(state,list){
            state.list = list
          },
        getTextVal(state,val){
            state.textVal = val
        },
        addList(state,obj){
            const data = {
                id:state.nextId,
                text:obj,
                done:false
            }
            state.list.push(data)
            state.nextId ++

        },
        deleStateList(state, valId){
            const id = state.list.findIndex(x=> x.id == valId)
            state.list.splice(id,1)
        },
        changeState(state,param){
            const i = state.list.findIndex(x=> x.id== param.id)
            if(i!== -1){
              state.list[i].done = param.state
            }
        },
        cleanAll(state){
             state.list = state.list.filter(item=> !item.done)
        },
        
        doneKey(state,key){
            state.doneKey = key
        }

<<<<<<< HEAD


=======
>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815
    },
    actions:{
        // Action 提交的是 mutation，可以包含任意异步操作
        // initList(context){
        //       const list =[
        //              {
        //                  id:1,
        //                  text:'测试01',
        //                  done:false
        //              },
        //                {
        //                  id:2,
        //                  text:'测试02',
        //                  done:false
        //              },
        //                {
        //                  id:3,
        //                  text:'测试03',
        //                  done:false
        //              }
        //          ]
        //     context.commit('initList',list)
        // },
<<<<<<< HEAD

        // 使用参数结构，简化代码，在多次需要commit的时候可用
        initList({commit}){
            // json本地数据
          axios.get('/data/list.json').then((res)=>{
              console.log(res)
              commit('initList',res.data)
          })
=======
        // 使用参数结构，简化代码，在多次需要commit的时候可用
        initList({commit}){
        //     const list =[
        //            {
        //                id:1,
        //                text:'测试01',
        //                done:false
        //            },
        //              {
        //                id:2,
        //                text:'测试02',
        //                done:false
        //            },
        //              {
        //                id:3,
        //                text:'测试03',
        //                done:false
        //            }
        //        ]
        //  commit('initList',list)
         console.log('789')
        axios.get('/data/list.json').then((res)=>{
                  console.log(res)
                  commit('initList',res.data)
              })
>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815
      }
    },
    getters: {
        // 如果getters.js就要加上下面的
        // list(state) {
        //     return state.list
        // }
<<<<<<< HEAD
=======

>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815
        // tab切换数据

        infoList(state){
            if(state.doneKey == 'undone'){
                return state.list.filter(item=> !item.done)
            }
            if(state.doneKey == 'done'){
             return state.list.filter(item=> item.done)
            }
            else{
              return state.list  
            }
        },

    }
  }