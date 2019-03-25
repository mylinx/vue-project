import Vue from 'vue'
import Router from 'vue-router'
import layout from './modules/layout'

Vue.use(Router) 
 
const routConfig= new Router({
  mode:'history',
  routes: [
    ...layout
  ]
})

export default   routConfig
