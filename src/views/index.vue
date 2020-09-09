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
<<<<<<< HEAD
=======
// import menu from '@/components/menu'
>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815
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
<<<<<<< HEAD
=======

>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815
</script>

<style>
.main{
  position: relative;
  left: 225px;
  width: calc(100% - 230px);
}
 
</style>
