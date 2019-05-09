import Vue from 'vue'
import 'es6-promise/auto' 
import Vuex from 'vuex'
import roter from './modules/router'
import users from './modules/user'
//import App from './modules/app'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'


Vue.use(Vuex)
 
export default  new Vuex.Store({
     modules:{
        roter,
        users
     },
     actions,
     getters,
     mutations
});