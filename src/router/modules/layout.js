export default [{
     path: '/',
     name: 'layout',
     component:()=>{ return import('@/view/Layout/layout') }, 
     children:[{
       path:'/userinfo',
       name:'userpage',
       component:()=>import('@/view/Layout/UserInfo/usersPage')
     },
     {
       path:'/Orders',
       name:'Orders',
       component:()=>import('@/view/Layout/Orders/OrderList')
     }]
   },
   {
     path: '*',
     name: 'notfound',
     component:()=>{ return import('@/view/notfound') }
   }]