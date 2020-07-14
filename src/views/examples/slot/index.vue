<template>
        <div class="bgBox">
             <SlotA>
              <p>父元素slotA标签内部的内容 --------  获取对应slotA组件定义的数据：{{msg}} </p>
            </SlotA>
            <SlotB>
               <template slot="header">
                <h1>header</h1>
              </template>

              <p> main content.</p>

              <template slot="footer">
                <p>footer</p>
              </template>  
            </SlotB> 
        </div>
    
</template>
<script>

import SlotA from './slotA'
import SlotB from './slotB'

export default {
  name: 'slot',
  data(){
      return{
           isCollapse: true,
           msg:'父组件data值'
         
      }
  },
  computed: {
    menuComponent() {
        return 'SlotA'
        // return 'MenuItem'
    }
  },
 
  components: {
    SlotA,
    SlotB
  }
}


</script> 
<style>

</style>
