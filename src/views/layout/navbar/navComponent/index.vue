<template>
     <component :is='menuComponent' :routData="routData" v-if="!routData.hidden">
          <template v-if="routData.children&&routData.children.length">
            <navComponent :key="item.name" :routData="item" v-for="item in routData.children" ></navComponent>
          </template>
     </component>  
    <!-- <el-submenu index="1" >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.label}}</span>
        </template>
          <el-menu-item index="slot">选项2</el-menu-item>
          <el-menu-item index="select">选项3</el-menu-item>
      </el-submenu> -->

</template>

<script>
import elMenu from './elMenu'
import itemNav from './itemNav'
 export default {
     name:'navComponent',
   data () {
     return {

     }
   },
   props:{
       routData:null,
       type:Object
   },
   computed:{
        menuComponent(){
        if (this.routData.children) {
                    return 'elMenu'
                } else {
                    return 'itemNav'
                }
        }
   },
   components: {
      elMenu,
      itemNav
   },
   created(){
        console.log(this.routData,'123')
   }
 }
</script>

<style>

 
</style>
