const routerArray = [
    {
        path:'/Layout',
        component: () => { return import('@/view/Layout/layout') },
        children:[]
    }
];
///此函数,只遍历有路由的方法
export function filterRouterNotNullPaths(data) { 
    data.forEach((item) => { 
        if (item.TreeChildren != null) {  
            filterRouterNotNullPaths(item.TreeChildren);
        }
        else {
            const rot = {
                path: item.PathRouter,
                name: item.Name,
                component: () => import('@/view/' + item.Component)
            }; 
            routerArray[0].children.push(rot);
        } 
    });
    return routerArray;
} 
