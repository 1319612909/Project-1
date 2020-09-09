<template>
 <div>
    <el-menu-item :index="routData.name">
        <i :class="'el-icon-'+routData.meta.icon"></i>
        <span slot="title">{{routData.meta.title}}</span>
    </el-menu-item>
 </div>
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
