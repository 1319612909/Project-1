import axios from 'axios'
import router from '@/router'
import { Loading, Message } from 'element-ui'
<<<<<<< HEAD
import snLodash from '@/utils/snLodash'
=======
// import snLodash from '@/utils/snLodash'
>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815
import {
    Notification,
    MessageBox
} from 'element-ui'

import store from '@/store'
<<<<<<< HEAD
import {
    getToken,
    getUserCode,
    clearAll,
    getUserInfo
} from './auth'
=======
// import {
//     getToken,
//     getUserCode,
//     clearAll,
//     getUserInfo
// } from './auth'
>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815
// 创建axios实例
const service = axios.create({
        baseURL: "api" + '/service-route/' // api 的 base_url
            // baseURL: "api" // api 的 base_url
            // baseURL: ''
            // timeout: 5000 // 请求超时时间
    })
    // 创建全局loading
let num = 0
    // 返回登录页
const returnLogin = function(params) {
    clearAll()
    Notification({
        position: 'bottom-right',
        showClose: true,
        type: 'error',
        message: '登陆过期，请重新登陆！'
    })
    router.push({
        path: '/login',
        query: {
            redirect: params
        }
    })
}

// 遮罩层
let loading

function openLoading(flag) {
    store.commit("changeButtonFlag", true)
    setTimeout(() => {
        if (!loading && flag) {
            loading = Loading.service({
                lock: true,
                text: '正在加载',
                spinner: 'el-icon-loading',
                background: 'rgba(0,0,0,0.3)',
                target: '#app',
                body: true,
                customClass: 'mask'
            })
        }
    }, 100)
}

const closeFlag = () => {
    setTimeout(() => {
        if (!num) {
            store.commit("changeButtonFlag", false)
            loading && loading.close()
            loading = null
        }
    }, 100)
}
const BlackNames = ['/gw-sys/api/meta-login/login']
    // request拦截器
service.interceptors.request.use(
        config => {
            num++
            openLoading()
            const requestId = new Date().getTime() + '|' + getUserInfo().loginName
            const url = '/gw-sys/api/meta-login/login'
<<<<<<< HEAD
            config.data = snLodash.deepCloneRush(config.data)
=======
            // config.data = snLodash.deepCloneRush(config.data)
>>>>>>> 82cf2f300b0ed125a3ea734bed3a6d609376c815
            if (config.data && !(BlackNames.indexOf(config.url) > -1)) {
                if (!config.data.commonInfo) {
                    config.data.commonInfo = {}
                }
                const commonInfoTemplate = {
                    userCode: getUserCode(),
                    loginUserCode: getUserCode(),
                    functionCode: 'fc001',
                    requestId: requestId
                }
                config.data.commonInfo = {...config.data.commonInfo, ...commonInfoTemplate }
            }
            if (getToken() && getUserCode() && config.url !== url) {
                config.headers['accessToken'] = getToken()
                config.headers['userCode'] = getUserCode()
            }
            return config
        },
        error => {
            num--
            loading.close()
                // Do something with request error
            Promise.reject(error)
        }
    )
    // response 拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
        num--
        closeFlag()
        const res = response.data
            // eslint-disable-next-line no-constant-condition
        let message = ''
        res.messageList && res.messageList.map((item, index) => {
            message += `<p>${String(index + 1)}.${item.message}</p>`
        })
        if (message) {
            Notification({
                position: 'bottom-right',
                showClose: true,
                message: message,
                dangerouslyUseHTMLString: true,
                type: res.success ? 'success' : 'error',
                duration: 5 * 1000
            })
        }
        if (res.code === '401' || res.code === '402' || res.code === '403') {
            const path = location.hash.slice(1)
            returnLogin(path)
            return
        }
        if (res.success === false) {
            // Message({
            //   showClose: true,
            //   message: res.message,
            //   type: 'error',
            //   duration: 5 * 1000
            // })
            // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
            if (res.code === 50012) {
                clearAll()
                MessageBox.confirm(
                    '你已被登出，可以取消继续留在该页面，或者重新登录',
                    '确定登出', {
                        confirmButtonText: '重新登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }
                ).then(() => {
                    store.dispatch('FedLogOut').then(() => {
                        location.reload() // 为了重新实例化vue-router对象 避免bug
                    })
                })
            }
            return Promise.reject(res)
        } else {
            if (response.data.type === 'application/octet-stream') {
                return response
            } else {
                return response.data
            }
        }
    },
    error => {
        num--
        closeFlag()
        if (error.response.data.status === 500) {
            Message({
                showClose: true,
                message: error.response.data.message,
                type: 'error',
                duration: 5 * 1000
            })
        }
        return Promise.reject(error)
    }
)
export default service