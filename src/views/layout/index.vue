<template>
 <div class="body">
     <div class="menu" :class="isCollapse ? 'actvieMenu' : ''">
         <Menu :isCollapse = "isCollapse"></Menu>
     </div>
     <div class="main" :class="isCollapse ? 'activeMain' : ''">
        <transition name="fade-transform" mode="out-in">
          <div class="topNav">
             <span class="el-icon-s-fold" @click="tabNavbar"></span>
          </div>
          <!-- <router-view /> -->
        </transition>
         <transition mode="out-in" name="el-fade-in-linear">
            <div class="mainBox">
            <router-view ></router-view>
            </div>
        </transition>
     </div>
 </div>
</template>

<script>
import Menu from './navbar'
 export default {
   data () {
     return {
        isCollapse:false
     }
   },
   components: {
      Menu
   },
   methods:{
      tabNavbar(){
          this.isCollapse = !this.isCollapse
      }
   }
 }
</script>

<style>
.body{
  height: 100%;
}
.menu{
    position: fixed;
    left: 0;
    width: 210px;
    height: 100%;
    background: #fff;
}
.main{
  padding-left: 210px;
  background-color: #f1f1f1;
  min-height: 100%;
}
.actvieMenu{
   width: 64px;
}
.activeMain{
  padding-left: 64px;
}
.topNav{
  padding-left: 15px;
  text-align: left;
  min-height: 40px;
  line-height: 40px;
  margin-left: 8px;
  background: #fff;
   box-shadow: 0 .5rem 1rem rgba(18,38,63,.05);
}
.mainBox{
  padding: 40px 30px 30px 20px;
}
 
</style>
