import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router/index'
import './icons' // icon 
import store from './store/index' 
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)   
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, 
  axios,
  render: h => h(App)
})

