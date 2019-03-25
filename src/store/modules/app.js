import Vue from 'vue'
import 'es6-promise/auto' 
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    showFooter:true,
    changeCount:0
};

const getters={
    isShow1(state){
        return  state.showFooter;
    },
    getChange1(){
        return state.changeCount;
    },
    getMenu(){
        
    }
}

const mutations={
    show1(state){
        state.showFooter=true;
    },
    hidden1(state){
        state.showFooter=false;
    },
    newValue1(state,sum){
        state.changeCount+=sum
    } 
}

const actions={
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

export default {
    namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}