///此函数是递归遍历,加载路由
export  function filterRouters(data) {
    const routerArray = []; 
    data.forEach((item) => { 
            if(item.TreeChildren!=null){
                const rot = { 
                    path: item.PathRouter, 
                    component: () => import('@/view/' + item.Component),
                    children: filterRouters(item.TreeChildren)
                };
                routerArray.push(rot);
            }
            else{
                const rot = {
                    path: item.PathRouter,
                    name: item.Name,
                    component: () => import('@/view/' + item.Component)
                };
                routerArray.push(rot);
            }
    });

    return routerArray;
}


