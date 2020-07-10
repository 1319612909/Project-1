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
            <router-view ></router-view>
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
  height: 100%;
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
}
 
</style>
