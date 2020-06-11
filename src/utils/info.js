
// 小于特定时间的前30天
export function contractShow(item){
    let end = item.endDate //特定时间
    const nowDate = new Date().getTime()
    const endDate = new Date(end).getTime()
    const thirytDay =  1000*60*60*24*30
    if(nowDate<endDate &&nowDate>endDate-thirytDay){
        return true
    }else{
        return false
    }
}

   /*获取某年某月的总天数*/
   export function  getDaysOfMonth(year, month) {
    var date = new Date(year, month, 0);
    var days = date.getDate();
    return days;
  }

/*获取当前月的总天数*/
export function getDays() {
var date = new Date();
//将当前月份加1，下移到下一个月
date.setMonth(date.getMonth() + 1);
//将当前的日期置为0，
date.setDate(0);
//再获取天数即取上个月的最后一天的天数
var days = date.getDate();
return days;
}

export function getD(starDate, endDate,day,m) {
//参数格式  starDate ： 2017-07-08 2017/01/12， endDate： 2017-07-08 2017/01/12  day: 2020, m:05/5
var sDate = new Date(starDate).getTime();
var eDate = new Date(endDate).getTime();
// var thisMothDays = 1000 * 3600 * 24 * getDays()
var thisMothDays = 1000 * 3600 * 24 * this.getDaysOfMonth(day,m)
if (eDate - sDate > thisMothDays) {
console.log('超过一个月')
    return true
} else {
console.log('未超过一个月')
    return false
}
}

export function download(){
    // const resFile = await  downloadReconciliation(fileDate)  // 后台请求回来的boba流
    if(res.headers.success === "true"){
        let fileName = "运营统计.xls"
        const blob = new Blob([res.data])
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(blob, fileName)
        } else {
            var link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = fileName
            link.click()
            window.URL.revokeObjectURL(link.href)
        }
    }else{
        const temp = res.headers.errormessage
        this.$message.error(decodeURIComponent(temp));
        return
    }
}
// 去重 + 排序
export function sortarr(arr){
	 var newArr = []
            for(var i=0;i<arr.length;i++){
               if(newArr.indexOf(arr[i])<0){
                   newArr.push(arr[i])
               }
            }
            for(i=0;i<newArr.length-1;i++){
                for(j=0;j<newArr.length-1-i;j++){
                    if(newArr[j]>newArr[j+1]){
                    var temp=newArr[j];
                    newArr[j]=newArr[j+1];
                    newArr[j+1]=temp;
                    }
                }
            }
        return newArr;
}


// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
// 实例（.vue引入 import {formatTimeToStr} from '@/utils/info',js使用 formatTimeToStr('Tue Jun 23 2020 00:00:00 GMT+0800')）
export function formatTimeToStr(times, pattern) {
    var d = new Date(times).Format("yyyy-MM-dd hh:mm:ss");
    if (pattern) {
        d = new Date(times).Format(pattern);
    }
    return d.toLocaleString();
}