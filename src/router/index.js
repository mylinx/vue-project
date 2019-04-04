import Vue from 'vue'
import Router from 'vue-router'
import layout from './modules/layout'
//import store from '../store/index'

Vue.use(Router)

import { filterRouters } from './modules/common'
const routConfig = new Router({
  mode: 'history',
  routes: [

    //...layout,
    {
      path: '/',
      name: 'login',
      component: () => import('@/view/'+item.path)
    }
    // {
    //   path: '/*',
    //   name: '/notfound',
    //   component: () => { return import('@/view/Layout/notfound') }
    // } 
  ]
})
 

routConfig.beforeEach((to, from, next) => {
  if(localStorage.getItem('router')!=null)
  {
    const routelist=JSON.parse(localStorage.getItem('router'));
     //filterRouters(routelist);
      
     routelist.forEach((item)=>{ 
        
        if(item.TreeChildren!=null){
          item.TreeChildren.forEach((item)=>{ 
            let rot={
              path:'',
              name:'',
              component:[]
          };
           rot.path=item.PathRouter
           rot.name=item.Name
           //rot.component= import('@/view/'+item.Component +'.vue')  
             //routConfig.addRoutes(rot);
          })
        }
     }); 
    
  }
  next()
})

export default routConfig