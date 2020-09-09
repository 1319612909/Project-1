<template>
 <div class="bgBox">
     <el-upload
        class="upload-demo"
        action=""
        :on-change="handleChange"
        :on-success="successFun"
        :http-request="upload"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>

          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="name"
            label="名称"
            width="180">
            </el-table-column>
          <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">下载
                
            </el-button>
        </template>
    </el-table-column>
  </el-table>
            <!-- <a class='download' :href='downloadhttp' download=""  title="下载">下载</a> -->

 </div>
</template>

<script>
 export default {
    name:'export',
   data () {
     return {
         tableData:[],
         fileList:[],
         dialogImageUrl: '',
        dialogVisible: false
     }
   },
   components: {

   },
   methods:{
       handleChange(file){
       },
       upload(file){
           console.log(file)

       },
       successFun(response, file, fileList){
     
            this.tableData.push({name:file.name})

       },

   },
  created(){
   
  },

 }
 /*
  初始化 调用获取下面表格的方法
  上传按钮，需要action：‘url’,
  el-upload 上绑定成功函数，在成功函数内判断file成功后，调用获取下面表格的方法
  下载按钮，可以绑定下载按钮的方法，利用canvas的img图，把ulr和name传过去，生成a标签，进行下载

 */
</script>

<style>

 
</style>
