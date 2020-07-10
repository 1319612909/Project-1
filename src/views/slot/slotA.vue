<template>
        <div class="SlotA">
            <div>我是SlotA组件内容</div>
            <slot></slot>
        </div>
        
</template>

<script>
export default {
  name: 'SlotA',
  data(){
    return{
      msg:'slotA,msg'
    }
  }
}

/*
 slot插槽，默认插槽
在父组件中，使用了带有slot的子组件标签，父组件中子组件的标签内部的内容会展示在子组件slot标签处；
如果子组件内没有slot的情况，在父组件中子组件标签中的内容会被丢弃

具名插槽
在子组件内 <slot name="header"></slot> 使用name属性赋值
在父组件中,使用template slot属性对应name的值
 <SlotB>
    <template slot="header">
     <h1>header</h1>
    </template>
 </SlotB> 

*/
</script>
<style lang="scss">
</style>