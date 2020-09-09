/*
  当各个组件内部通过import引入此文件，然后通过minxins：["name"],混入到组件内部，
  此js文件，和被混入的vue组件中的属性和方法都可以通过this调用和获取
  双向取值
*/
export default {
    data() {
        return {
            page: 1,
            total: 10,
            pageSize: 10,
            tableData: [],
            searchInfo: {},
            data:[]
        }
    },
    methods: {
        handleSizeChange(val) {
            this.pageSize = val
            this.getTableData()
        },
        handleCurrentChange(val) {
            this.page = val
            this.getTableData()
        },
        async getTableData(page = this.page, pageSize = this.pageSize) {
            // listApi  这个方法，在哪个组件中引用了 mixins: ["name"],就从哪个组件去找里面data中的listApi的方法
            const table = await this.listApi({ page, pageSize, ...this.searchInfo })
            this.tableData = table.data.list
            this.total = table.data.total
            this.page = table.data.page
            this.pageSize = table.data.pageSize
        },
        // 测试
    initData(){
        let name = this.form  //从混入的组件内部属性获取的
        console.log(name)
        let json = [{
        
            "id":1,
            "text":"测试01",
            "done":false
        },
          {
            "id":2,
            "text":"测试02",
            "done":false
        },
          {
            "id":3,
            "text":"测试03",
            "done":false
        }]
        this.data = json
        this.onSubmit() //测试从form的methods函数内部调用的方法
    }
    }
    
}