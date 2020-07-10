<template>
    <el-submenu>
        <template slot="title" :index="routerList">
          <i class="el-icon-location"></i>
          <span slot="title">{{routerList.title}}</span>
        </template>
        <slot></slot>
        <!-- <el-menu-item  :index="data.menuId" v-for="data in item.children" :key="data.ID">{{data.meta.title}}</el-menu-item> -->
         <!-- <elMenu :route='item.children'></elMenu>  -->
      </el-submenu>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
     props:{
      routerList:{
        default:null,
        type:Array
      }
  },
  
   components: {

   }
 }
</script>

<style>

 
</style>
