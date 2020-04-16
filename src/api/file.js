import request from '@/utils/request'

//下载列表导出xls的方法
export function downloadCollectiingBillByXLS(data, url, commonInfo) {
    if (!url) {
        url = 'gw-lcb/partner/accept/downloadCollectiingBillByXLS'
    }
    return request({
        url,
        method: 'post',
        responseType: 'blob',
        data: {
            ...data,
            commonInfo: CONSTANT.REPLACE_COMMONINFO(data, commonInfo || CONSTANT.COMMON_INFO_CLAIM)
        }
    })
}
