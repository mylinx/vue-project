/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import { Loading, Message } from 'element-ui'
import { getToken } from "@/until/auth" 
import router from "@/router/index"

// 超时时间
axios.defaults.timeout = 5000
axios.defaults.baseURL = process.env.BASE_HOST 

// http请求拦截器
var loadinginstace
axios.interceptors.request.use(config => {
      // Do something before request is sent

    // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    config.headers['Authorization'] = "Bearer  " +getToken()

   // element ui Loading方法
   //loadinginstace = Loading.service({ fullscreen: true })
   return config
}, error => {
  // loadinginstace.close()
   Message.error({
      message: '加载超时'
   })
   return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading 
   return data
}, error => {
   let msg = "";
   if (error && error.response) {
      switch (error.response.status) {
         case 401:
            {
               //msg = "未授权,请重新登录!"
               //router.push('/');
            }
      }
   }

 

  //loadinginstace.close()
   Message.error({
      message: msg,
      duration: 1000
   })
   return Promise.reject(error)
})

export default axios