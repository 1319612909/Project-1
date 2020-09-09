<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
       @select="selectMenuItem"
      :collapse="isCollapse"
      unique-opened
    >
      <template v-show='asyncRouters[0]' v-for="(item,index) in asyncRouters[0].children">
        <navComponent  :key="index" :routData='item'></navComponent>
        </template>  
    </el-menu>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/store'
import { mapGetters } from 'vuex'
import navComponent from './navComponent'
export default {
  data() {
    return {
    };
  },
  props:{
      isCollapse:{
        default:null,
        type:Boolean
      }
  },
  computed:{
    ...mapGetters(['asyncRouters'])
  },
  created(){
      store.dispatch('setAsyncRouter')
  },
  components: {navComponent},
   methods: {
     selectMenuItem(index){
       this.$router.push({ name:  index })
     },
    }

};
</script>

<style>
</style>
