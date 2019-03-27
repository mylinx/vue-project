import Vue from 'vue'
import Router from 'vue-router' 
import layout from './modules/layout' 
//import store from '../store/index'

Vue.use(Router) 
 
const routConfig= new Router({
  mode:'history',
  routes: [
  
    ...layout, 
    
    //...users
   
  ]
})



routConfig.beforeEach((to,from,next)=>{
  //console.log(...layout);
  // let isLogin=false;
  // if(isLogin)
  // { 
  //     console.log(222);
  // }
  // else{
  //   console.log(this.$store);
  //   console.log(111);
  //   next();
  // } 
  next()
})

export default   routConfig