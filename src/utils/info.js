
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
