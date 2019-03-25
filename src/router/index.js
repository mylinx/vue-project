import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Error from '@/view/Error'
import Main from '@/view/Main' 
import aside from '@/view/iframe/aside'
import Index from '@/view/compnents/index'
import mymain from '@/view/myview/main' 
import first from '@/view/myview/first' 
import liuyan from '@/view/myview/liuyan' 
import about from '@/view/myview/about' 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mymain',
      component: mymain,
      redirect:'/myview/first', 
      children:[{ 
        path:'/myview/first',
        component:first
      },
      {
        path:'/myview/liuyan',
        component:liuyan
      },
      {
        path:'/myview/about',
        component:about
      }
      ]
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
