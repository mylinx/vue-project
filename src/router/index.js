import Vue from 'vue'
import Router from 'vue-router'
import layout from './modules/layout'
//import store from '../store/index'

Vue.use(Router)
import { getToken } from "@/until/auth";
import { filterRouters } from './modules/common.js'
import { filterRouterNotNullPaths } from "./modules/filterRouterNotNullPaths"; 
const routConfig = new Router({
  mode: 'history',
  routes: [
    ...layout,
    // {
    //   path: '/',
    //   name: 'login',
    //   component: () => import('@/view/Layout/login')
    // }, 
    // {
    //   path: '/layout',
    //   name: 'layout',
    //   component: () => { return import('@/view/Layout/layout') },
    // }
  ], 
})
 
routConfig.beforeEach((to,from,next)=>{
  if(getToken()=='' || getToken()==undefined)
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

export default routConfig