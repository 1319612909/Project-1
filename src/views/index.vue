<template>
 <div>
     <Menu></Menu>
     <div class="main">
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
     </div>
 </div>
</template>

<script>
import Menu from '@/components/menu'
// import menu from '@/components/menu'
 export default {
     name:'index',
   data () {
     return {
        
     }
   },
   components: {
       Menu
   }
 }

</script>

<style>
.main{
  position: relative;
  left: 225px;
  width: calc(100% - 230px);
}
 
</style>
