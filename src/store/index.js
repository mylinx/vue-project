import Vue from 'vue'
import 'es6-promise/auto' 
import Vuex from 'vuex'
import roter from './modules/router'
//import App from './modules/app'

Vue.use(Vuex)
 
export default  new Vuex.Store({
     modules:{
        roter
     }
});