<template>
 <div>
    <el-menu-item :index="routerInfo.name">
        <i :class="'el-icon-'+routerInfo.meta.icon"></i>
        <span slot="title">{{routerInfo.meta.title}}</span>
    </el-menu-item>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style>

 
</style>
