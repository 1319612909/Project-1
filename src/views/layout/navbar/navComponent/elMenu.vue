<template>
    <el-submenu :index="routData.name">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{routData.meta.title}}</span>
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
    routData: {
          default: function() {
            return null
          },
          type: Object
        }
   },
  
   components: {

   }
 }
</script>

<style>

 
</style>
