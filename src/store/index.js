import Vue from 'vue'
import 'es6-promise/auto' 
import Vuex from 'vuex'
import User from './modules/user'
//import App from './modules/app'

Vue.use(Vuex)
 
export default  new Vuex.Store({
     modules:{
         //User,
         //App
         App:{
            state:{
                showFooter:true,
                changeCount:0
            },
            getters:{
                isShow1(state){ 
                    return  state.showFooter;
                },
                getChange1(){
                    return state.changeCount;
                },
                getMenu(state){
                  
                }
            },
            
             mutations:{
                show1(state){
                    state.showFooter=true;
                },
                hidden1(state){
                    state.showFooter=false;
                },
                newValue1(state,sum){
                    state.changeCount+=sum
                } 
            },
            
             actions:{
                showFoot1(context){
                    context.commit('show1');
                },
            
                hiDden(context){
                    context.commit('hidden1');
                },
            
                getNum(context,num){
                    context.commit('newValue1',num);
                }
            }
         }
     }
});