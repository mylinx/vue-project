import Vue from 'vue'
import Router from 'vue-router'
import layout from './modules/layout'
//import store from '../store/index'

Vue.use(Router)

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
 

export default routConfig