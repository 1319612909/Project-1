<template>
 <div class="bgBox array">
     <h3>常用array改变原数组的方法：</h3>
     <ul>
         <li>pop() -----  删除数组最后一个，返回被删除的值 </li>
         <li>shift() -----  删除数组第一个一个，返回被删除的值 </li>
         <li>push()-----  追加到数组最后,直接改变原数组值  </li>
         <li>reverse()-----  颠倒数组中元素的顺序,直接改变原数组值  </li>
         <li>sort()-----  排序  a-b顺序，b-a倒序  </li>
         <li>splice(1,1,'555')-----  从数组中添加/删除项目，然后返回被删除的项目  </li>
         <li>unshift()----- 向数组的开头添加一个或更多元素，并返回新的length  </li>
     </ul>
     <h3 class="bule">常用array不改变原数组的方法：</h3>
     <ul>
         <li>concat() -----  连接两个或更多的数组，返回结果。 </li>
         <li>jion("-") -----  通过指定分隔符分隔成字符串 </li>
         <li>slice(start,end)-----  已有的数组中返回选定的元素  </li>
     </ul>
      <h3 class="bule">es6 数组方法</h3>
     <ul>
         <li>Array.from()     ----- 可接收三个参数，第一个参数为类数组对象，第二个参数为映射函数，如果使用了映射函数，可以传第三个参数表示映射函数的this值。 </li>
         <li>find()       -----  返回根据某个条件去查找匹配的值 </li>
         <li>findIndex() -----  返回根据某个条件去查找匹配的值的索引 </li>
         <li>includes() -----   方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。</li>
     </ul>
      <h3 class="bule">es6 遍历</h3>
     <ul>
         <li>forEach((item, index, arr)=>{})   ----- 没有返回值</li>
         <li>map()       -----  返回一个新的数组 </li>
         <li>filter() ----- 包含满足条件的数组项，返回一个新数组 </li>
         <li>some() -----   如果有一个满足条件的值则返回true</li>
          <li>every() -----  如果所有数组项都满足条件则返回true</li>
     </ul>
 </div>
</template>

<script>
 export default {
   data () {
     return {
        
     }
   },
   components: {

   },
   created(){
    this.pop()
    this.arrFun()
   },
   methods:{
       pop(){
           let arr = [1,2,3]
           const res = arr.slice(0,2)
           console.log(res,arr)
       },
        arrFun(){
            // 两数组合并，并去除重复的值
            const arr1 = [1, 2, 3, 4, 5, 8, 9]
            const arr2 = [5, 6, 7, 8, 9];
            const result = arr1.concat(arr2.filter(v => !arr1.includes(v)))
            console.log(result,111)
        }
   }
 }
</script>

<style>
.array{
    padding-left: 30px;
    text-align: left;
}
.bule{
    color: #0681d0;
}
 
</style>
