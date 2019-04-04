export default {
    state: {
        menuRouter: [], //路由
    },

    mutations: {
        //添加路由
        Add_Router(state, data) { 
            // data.forEach(element => {
            //     if (element.TreeChildren) {
            //         let rout = {};
            //         element.TreeChildren.forEach(elm => {
            //             rout = {
            //                 path: elm.PathRouter,
            //                 component: () => import('@/' + elm.Component)
            //             }
            //         })
            //         state.menuRouter.push(rout);
            //     }
                
                // if (element.TreeChildren) {
                //     rout = {
                //         path: element.PathRouter,
                //         component: () => import('@/' + element.Component),
                //         //children: this.Add_Router(state, element.TreeChildren)
                //     } 
                // } 
                // else{
                //     rout = {
                //         path: element.PathRouter,
                //         component: () => import('@/' + element.Component) 
                //     } 
                // }
                //state.menuRouter = rout;
            // });
            state.menuRouter=data;
        },
        //缓存菜单
        GetMenu(state) {

        }
    }
}