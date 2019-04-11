import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router/index'
import './icons' // icon 
import store from './store/index'
import axios from 'axios'
 
import { getToken } from "@/until/auth";
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  render: h => h(App)
}) 


router.beforeEach((to,from,next)=>{
    console.log(getToken()+'111');
    if(getToken()=='' || getToken()=='undefined')
    {
       if(to.path=='/')
        {
           next();
        }
        else{
            next({path:'/'})
        }
    }
    else{
      next();
    }
})