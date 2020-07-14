<template>
    <div>
        <div class="todo">
            <div class="search">
                <el-input  v-model="input"  placeholder="请输入内容" @input='getVal()'></el-input>
                <el-button type="primary" @click="addList">添加事项</el-button>
            </div>
            <div class="list">
                <ul>
                    <li v-for="item in infoList" :key='item.id'>
                        <el-checkbox :checked='item.done'  @change='checked=>checkRow(checked, item)' />
                        <span class="listText">{{item.text}}</span>
                        <el-button type="text" @click="deleList(item.id)">删除</el-button>
                    </li>
                </ul>
                <div class="botbox">
                    <span>{{doneLength}}条剩余</span>
                    <el-button :type=" doneKey=='all'? 'primary' : 'default'"    @click="handover('all')">全部</el-button>
                    <el-button :type=" doneKey=='undone'? 'primary' : 'default'"  @click="handover('undone')">未完成</el-button>
                    <el-button :type=" doneKey=='done'? 'primary' : 'default'"  @click="handover('done')">已完成</el-button>
                    <el-button type="text" @click="cleanAll">清楚已完成</el-button>

                </div>
            </div>
        </div>
    </div>
   

</template>
<script>
import store from '@/store'
import { mapState, mapGetters} from 'vuex'
     export default {
          name:'todoList',
         data(){
             return{
                //  list:[]
                input: '',
                checked: false
             }
         },
         computed:{
            //  mapState的用法
            //  ...mapState({
            //     list: state => state.todo.list,
            //  }),
            ...mapGetters(["list",'textVal',"doneLength","doneKey","infoList"]),
         },
         created(){
            //  初始列表值
              store.dispatch('initList')
         },
         methods:{
             getVal(){
                 store.commit('getTextVal',this.textVal)
             },
             addList(){
                 store.commit('addList',this.input)
                 this.input =''
             },
            checkRow(checked,item) {
                const param = {
                    id:item.id,
                    state:checked
                }
                store.commit('changeState',param)
            },
            deleList(id){
                store.commit('deleStateList',id)
            },
            cleanAll(){
                store.commit('cleanAll')
            },
            handover(key){
                store.commit('doneKey',key)
            }
         }
         
     }
</script>  
<style  lang='scss'  scoped>
.todo{
    width: 60%;
    text-align: left;
}
ul,li{
    list-style: none;
}
    .search{
        margin-top: 40px;
       
        .el-input{
            width: 60%;
            margin-right: 20px;
        }
        
    }
.list{
    width: 60%;
   border: 1px solid #ddd;
   margin-top: 15px; 
   ul{
       padding-left: 15px;
   }
}
.listText{
    margin: 0 45px 0 10px;
}
li{
    border-bottom: 1px solid #ddd;
}
.botbox{
    margin-bottom: 15px;
}
</style>