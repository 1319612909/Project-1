<template>
 <div class="menuBox">
   <el-row class="tac">
  <el-col :span="24">
      <div><h2 class="titH2">admin</h2></div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>测试</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="goTo('/one')">表格</el-menu-item>
          <el-menu-item index="1-2" @click="goTo('/form')">表单</el-menu-item>
          <el-menu-item index="1-3" @click="goTo('/export')">测试</el-menu-item>
          <el-menu-item index="1-3" @click="goTo('/select')">省市县联动</el-menu-item>

          <!-- <el-menu-item index="1-4" @click="goTo('/export')">导出</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>

 </div>
</template>

<script>
 export default {
   data () {
     return {
        activeIndex: '1',
        activeIndex2: '1'
     }
   },
   components: {

   },
   methods:{
        goTo(key) {
          this.$router.push({path: key})
      },
      handleOpen(){

      },
      handleClose(){

      }
   }
 }
</script>

<style lang="scss">
.menuBox{
  width: 220px;
   height: 100%;
   position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background:rgb(84, 92, 100);
.tac{
    .titH2{
        color:#fff;
    }
    .el-col-24{
        height: 100%;
    }
    .el-submenu,
    .el-menu-item{
        text-align: left;
    }
}
}

</style>
