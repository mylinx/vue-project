export default {
    state: {
        routerstate:true,
        menuRouter: [], //路由
    },
    gettters:{
        
    },
    mutations: {
        //添加路由
        Add_Router(state, data) {  
            state.menuRouter=data;
        },
        //修改状态
        changestate(state, value){
            state.routerstate=value;
        }
    }
}