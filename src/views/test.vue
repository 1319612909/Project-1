<template>
 <div class="warp">
    <form  method="post">
      <input @change="fileChange" id="file" multiple="multiple" type="file" />
    </form>
    <!-- <input type="file" @change="fileChange($event)"> -->
    <div class="list">
      <transition-group name="list" tag="p">
        <span v-for="item in list" v-bind:key="item" class="list-item">
          {{ item.name }}
        </span>
      </transition-group>
   </div>

 </div>
</template>

<script>
 export default {
   data () {
     return {
      list:[],
      file:null,
     }
   },
   methods:{
     fileChange(e){
        this.file = e.target.files[0]
        this.list.push(this.file)
<<<<<<< HEAD
     }，
=======
     },
>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815
   getBase64(file) {
      return new Promise(function(resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function() {
          imgResult = reader.result;
        };
        reader.onerror = function(error) {
          reject(error);
        };
        reader.onloadend = function() {
          resolve(imgResult);
        };
      })
    },
   }
 }
</script>

<style>
.warp{
  width: 50%;
}

.list-item {
  display: block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-30px);
}
 
</style>
