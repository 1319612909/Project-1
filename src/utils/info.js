
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
