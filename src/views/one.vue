<template>
 <div>
  <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
       <el-pagination
        :current-page="pageNum"
        :page-size="pageSize"
        :page-sizes="[10,20,50,100]"
        :total="total"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        background
        layout="total, sizes, prev, pager, next, jumper"
        popper-class="pageNation"
      ></el-pagination>

 </div>
</template>

<script>
import axios from 'axios'
 export default {
   data () {
     return {
        pageNum:1,
				pageSize:10,
        total:0,
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
     }
   },
   created(){
      this.getData()
   },
   methods:{
       handleSizeChange(val) {
        this.pageSize = val
				const start = (this.pageNum-1)*this.pageSize
				const end = this.pageNum*this.pageSize
				this.searchFun()
       },
       handleCurrentChange(val) {
         this.pageNum = val
				const start = (this.pageNum-1)*this.pageSize
				const end = this.pageNum*this.pageSize
				this.searchFun()
       },
      searchFun(){
          const startNo = (this.pageNum-1)*this.pageSize
          const count = this.pageNum*this.pageSize
          let data ={
            value:{},
             page:{
              "startNo": start,
              "count": end
            }
          }
      },
     getData(){
      axios.get('https://douban.uieee.com/v2/movie/coming_soon').then(res=>{
        console.log(res)
      })
     }
   },
   components: {
   }
 }
<<<<<<< HEAD
=======
 /*
 vue主要优点 ：组件化，数据驱动


 子传递父
 在子组件定义方法，把子组件的val，
  $emit('name',val)  产生事件

  在父组件里面写子组件标签上  @name="fnData"，进行监听
  在父组件的methods{
    fnData(val){
      //val就是子组件传递过来的参数啦
    }
  }



 */  
>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815
</script>

<style>

<<<<<<< HEAD

 
=======
>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815
</style>
