<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
       @select="selectMenuItem"
      :collapse="isCollapse"
    >
      <el-submenu index="1" v-for="item in testArr" :key="item.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.label}}</span>
        </template>
          <el-menu-item index="slot">选项2</el-menu-item>
          <el-menu-item index="select">选项3</el-menu-item>
      </el-submenu>

    </el-menu>
    


  </div>
</template>

<script>
import axios from 'axios'
// import elMenu from './elMenu'
// import { asyncRouterHandle } from '@/utils/asyncRouter'
export default {
  data() {
    return {
        routerList:[],
        routArr:[],
        asyncRouter:[],
        baseRouter:[],
        testArr:[
          {label:'123',
          id:1},
          {label:'456',
          id:1}
        ]
       
    };
  },
  props:{
      isCollapse:{
        default:null,
        type:Boolean
      }
  },
  created(){
      this.init()

      
  },
//   components: {elMenu},
   methods: {
     selectMenuItem(index){
       console.log(index)
       this.$router.push({ name:  index })
     },
      init(){
        // const asyncRouter = []
          this.baseRouter = [{
                path: '/layout',
                name: 'layout',
                component: "view/layout/index.vue",
                meta: {
                    title: "底层layout"
                },
                children: []
            }]
        axios.get('/data/menu.json').then(res=>{
            this.asyncRouter= res.data.data.menus
            
      this.asyncRouter.push({
                      path: "404",
                      name: "404",
                      hidden: true,
                      meta: {
                          title: "迷路了*。*",
                      },
                      component: 'view/error/index.vue'
                  })
                  this.formatRouter(this.asyncRouter)
                  this.baseRouter[0].children = this.asyncRouter
                  this.baseRouter.push({
                      path: '*',
                      redirect: '/layout/404'

                  })
        
          

              console.log(this.routerList,'1')  

              /*
            16个没有childer的菜单名字
            label: "仪表盘"
            value: "dashboard"
              
              */ 
            //  asyncRouters == baseRouter
              console.log(this.baseRouter,'2')

            // baseRouter,一级菜单

      })
      
     


      },
         formatRouter (routes){
          //  这个递归方法就是筛选出路由里面有childer的，把childer的title，和name抽离出来，
          // 最后一级的菜单使用
                  routes && routes.map(item => {
                      if ((!item.children || item.children.every(ch => ch.hidden)) && item.name != '404') {
                         this.routerList.push({ label: item.meta.title, value: item.name })
                      }
                      item.meta.hidden = item.hidden
                      if (item.children && item.children.length > 0) {
                          this.formatRouter(item.children)
                      }
                  })
              },   
  
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
 

    }

};
</script>

<style>
</style>
