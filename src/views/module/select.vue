<template>
  <div class="linkage bgBox">
    <span class="checked">请选择:</span>
    <el-select
      v-model="provinceVal"
      @change="choseProvince"
      placeholder="省级地区">
      <el-option
        v-for="item in province"
        :key="item.id"
        :label="item.value"
        :value="item.id">
      </el-option>
    </el-select>
    <el-select
      v-model="cityVal"
      @change="choseCity"
      placeholder="市级地区">
      <el-option
        v-for="item in cityArry"
        :key="item.id"
        :label="item.value"
        :value="item.id">
      </el-option>
    </el-select>
    <el-select
      v-model="regionVal"
      @change="choseRegion"
      placeholder="区级地区">
      <el-option
        v-for="item in regionArry"
        :key="item.id"
        :label="item.value"
        :value="item.id">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'moduleSelect',
  data () {
    return {
      mapJson:'../../public/json/map.json' ,
      province:'',
      city:'',
      region:'',
      provinceVal: '',
      cityVal: '',
      cityArry: [],
      regionVal: '',
      regionArry: [],
      
    }
  },

  methods:{
   
    // 加载china地点数据，三级
      getCityData:function(){
       let that = this
        axios.get('/data/map.json').then(function(response){
          if (response.status==200) {
            const data = response.data
            that.province = []
            that.city = []
            that.region = []
            // 省市区数据分类
            for (let item in data) {
              if (item.match(/0000$/)) {//省
                that.province.push({id: item, value: data[item], children: []})
              } else if (item.match(/00$/)) {//市
                that.city.push({id: item, value: data[item], children: []})
              } else {//区
                that.region.push({id: item, value: data[item]})
              }
            }
            // 分类市级
            for (let index in that.province) {
              for (let index1 in that.city) {
                if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
                  that.province[index].children.push(that.city[index1])
                }
              }
            }
            // 分类区级
            for(let item1 in that.city) {
              for(let item2 in that.region) {
                if (that.region[item2].id.slice(0, 4) === that.city[item1].id.slice(0, 4)) {
                  that.city[item1].children.push(that.region[item2])
                }
              }
            }
          }
          else{
            console.log(response.status)
          }
        }).catch(function(error){console.log(typeof+ error)})
      },
      // 选省
      choseProvince:function(e) {
        for (let index2 in this.province) {
          if (e === this.province[index2].id) {
            this.cityArry = this.province[index2].children
            // this.cityVal = this.province[index2].children[0].value //选择市自动选出第一个市
            this.regionArry =this.province[index2].children[0].children
            // this.regionVal = this.province[index2].children[0].children[0].value  //选择市自动选出第一个区
            this.E = this.regionArry[0].id
          }
        }
      },
      // 选市
      choseCity:function(e) {
        for (let index3 in this.city) {
          if (e === this.city[index3].id) {
            this.regionArry = this.city[index3].children
            // this.regionVal = this.city[index3].children[0].value  //选择市自动选出第一个区
            this.E = this.regionArry[0].id
            // console.log(this.E)
          }
        }
      },
      // 选区
      choseRegion:function(e) {
        this.E=e;
        // console.log(this.E)
      },
    },
    created:function(){
      this.getCityData()
    }
}
</script>

<style scoped>
.linkage{
  min-height: 300px;
  padding-left: 30px;
  text-align: left;
}
.checked{
  margin-right: 15px;
}
</style>