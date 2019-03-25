import Vue from 'vue'
import 'es6-promise/auto' 
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    showFooter:true,
    changeCount:0, 
};

const getters={
    isShow(state){
        return  state.showFooter;
    },
    getChange(){
        return state.changeCount;
    },
    getMenu(){
       
   }
}

const mutations={
    show(state){
        state.showFooter=true;
    },
    hidden(state){
        state.showFooter=false;
    },
    newValue(state,sum){
        state.changeCount+=sum
    }
}

const actions={
    showFoot(context){
        context.commit('show');
    },

    hiDden(context){
        context.commit('hidden');
    },

    getNum(context,num){
        context.commit('newValue',num);
    }
}


 
export default {
    namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}