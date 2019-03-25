import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import './icons' // icon
import '../config/http'
import store from './store/index'
import openWin from './static/js/openWindow'

Vue.config.productionTip = false
Vue.use(ElementUI) 
Vue.prototype.$openWin=openWin
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  openWin,
  render: h => h(App)
})
 
router.beforeEach((to,from,next)=>{


    next()
});