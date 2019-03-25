/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import { Loading, Message } from 'element-ui'
// 超时时间
axios.defaults.timeout = 5000

// http请求拦截器
var loadinginstace
axios.interceptors.request.use(config => {
 // element ui Loading方法
 loadinginstace = Loading.service({ fullscreen: true })
 return config
}, error => {
 loadinginstace.close()
 Message.error({
 message: '加载超时'
 })
 return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
 loadinginstace.close()
 return data
}, error => {
  let msg="";
  if(error && error.response)
  {
     switch(error.response.status)
     {
         case 401 :
            msg="未授权,请重新登录!"
     }
  }

 loadinginstace.close()
 Message.error({
    message: msg,
    duration:1000
 })
 return Promise.reject(error)
})
 
export default axios