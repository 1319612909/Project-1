<template>
    <!-- form -->
    <el-main class="box">
        <div class="pickFrom pickFromMinHight">
            <div :class="[$store.getters.theme,'clearfix snLayout']">
                <h3 :class="'h-title1'" slot="title">催缴清单查询条件</h3>
                <div class="formLayout" ref="formLayout">
                    <el-form :inline="true" :model="snv" class="snFormLayout clearfix" label-width="100px" ref="metaform">
                        <!-- 真正书写内容的地方  开始 -->
                        <el-form-item :label="'账单天数'" :span="8">
                            <el-input v-model="snv.days"></el-input>
                        </el-form-item>
                        <el-form-item :label="'账期开始时间'" :span="8">
                            <el-date-picker
                                    v-model="snv.startTime"
                                    type="date"
                                    placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item :label="'账期结束时间'" :span="8">
                            <el-date-picker
                                    v-model="snv.endTime"
                                    type="date"
                                    placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item :label="'账单类型'" :span="8">
                            <el-checkbox-group v-model="list">
                                <el-checkbox v-for="(item,index) in arr" :label=item.key :key="index">{{item.name}}</el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>

                        <!-- 真正书写内容的地方  结束 -->
                    </el-form>
                </div>
            </div>
        </div>
        <el-button @click="reset()" class="pickBtn resetBtn" size="small" type="warning">重置</el-button>
        <el-button @click="searchFunP(0,10,()=>{})" class="pickBtn" size="small" type="warning">查询</el-button>
        <div class="pickGrid"></div>

        <!-- grid -->
        <div class="pickGrid">
            <div :class="[$store.getters.theme,'clearfix snLayout']">
                <h3 :class="'h-title1'" slot="title">催缴清单结果</h3>
                <div class="gridLayout">
                    <el-button @click="exportExcel()" class="pickBtn" size="small" type="warning">导出excel</el-button>

                    <div class="snGridLayout">
                        <el-table :data="snvs" border header-row-class-name="gridHeader" highlight-current-row ref="singleTable">
                            <!-- 真正书写内容的地方  开始 -->
                            <el-table-column label="客户名称">
                                <template slot-scope="scope">{{scope.row.userName}}</template>
                            </el-table-column>
                            <el-table-column label="性别">
                                <template slot-scope="scope">{{scope.row.sex}}</template>
                            </el-table-column>
                            <el-table-column label="联系电话">
                                <template slot-scope="scope">{{scope.row.mobilePhone}}</template>
                            </el-table-column>
                            <el-table-column label="车牌号">
                                <template slot-scope="scope">{{scope.row.plateNo}}</template>
                            </el-table-column>
                            <el-table-column label="计划名称">
                                <template slot-scope="scope">{{scope.row.planName}}</template>
                            </el-table-column>
                            <el-table-column label="账单号">
                                <template slot-scope="scope">{{scope.row.billNo}}</template>
                            </el-table-column>
                            <el-table-column label="账单周期">
                                <template slot-scope="scope">{{scope.row.billCycle}}</template>
                            </el-table-column>
                            <el-table-column label="账单金额">
                                <template slot-scope="scope">{{scope.row.billAmt}}</template>
                            </el-table-column>
                            <el-table-column label="收支类型">
                                <template slot-scope="scope">{{scope.row.rpType}}</template>
                            </el-table-column>

                            <!-- 真正书写内容的地方  结束 -->
                        </el-table>
                        <!-- 分页 -->
                    </div>
                </div>
            </div>
        </div>
    </el-main>
</template>

<script>
    // import { queryCollectiingBillList, downloadCollectiingBillByXLS } from "@/api/payAndLiquidate"
    // import {formatTimeToStr} from '@/utils/data'
    export default {
        name: "payAndLiquidate.vue",
        data() {
            return {
                snv: {
                    days:'',
                    startTime:'',
                    endTime:'',
                    rpTypes:[]
                },
                snvs:[],
                options: [{
                    value: '0',
                    label: '已加入'
                },
                    {
                        value: '1',
                        label: '未加入'
                    }
                ],
                arr:[
                    {
                        key:'1',
                        name:'普通分摊'
                    },{
                        key:'2',
                        name:'提前退出'
                    },{
                        key:'3',
                        name:'提前退出计划'
                    }
                ],
                list:[],
                pageNum:1,
                pageSize:10,
                total:0,
            }
        },
        created() {},
        methods: {
            async exportExcel(){
                const start = formatTimeToStr(this.snv.startTime)
                const end = formatTimeToStr(this.snv.endTime)
                let datas = {
                    value:{
                        "days": this.snv.days,
                        "startTime": start,
                        "endTime": end,
                        "pageNo":1,
                        "rpTypes":JSON.parse(JSON.stringify(this.list)) //去除this.list的_ob_observe
                    }
                }
                const res = await downloadCollectiingBillByXLS(datas)
                console.log(res)
                let fileName = "催缴清单.xls"
                const blob = new Blob([res])
                if (window.navigator.msSaveOrOpenBlob) {
                    navigator.msSaveBlob(blob, fileName)
                } else {
                    var link = document.createElement('a')
                    link.href = window.URL.createObjectURL(blob)
                    link.download = fileName
                    link.click()
                    window.URL.revokeObjectURL(link.href)
                }
            }
        }
    }
</script>

<style lang="scss">
    .special-lcb {
        width: 23%;
    }
</style>
