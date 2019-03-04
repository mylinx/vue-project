import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Error from '@/view/Error'
import Main from '@/view/Main' 
import aside from '@/view/iframe/aside'
import Index from '@/view/compnents/index'
import mymain from '@/view/myview/main' 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: mymain
    }
    // {
    //   path: '/',
    //   name: 'main',
    //   component: Main,
    //   children:[
       
    //     {
    //       path:'/Login',
    //       component:Login
    //     },
    //     {
    //       path:'*',
    //       component:Error
    //     }
    //   ]
    // },
    // {
    //   path:'*',
    //   component:Error
    // }
  ]
})
