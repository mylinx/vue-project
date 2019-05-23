
export default [
  {
    path: '/',
    name: 'login',
    component: () => import('@/view/Layout/login'),
    meta:{
       isLogin:false,
       role:['admin','user']
    }
  },
   {
    path: '/layout',
    name: 'layout',
    meta:{
      isLogin:false,
      role:['admin','user']
    },
    component: () => { return import('@/view/Layout/layout') },
    children: [
      {
        path: '/userslist',
        name: 'userslist',
        component:()=>{ return import('@/view/Layout/users/user_components/userslist') }, 
        meta:{
            title:'用户列表',
            icon: 'el-icon-setting',
            roles: ['admin','kfadmin']
        }
      },
      {
        path: '/pessionslist',
        name: 'pessionslist',
        component:()=>{ return import('@/view/Layout/users/perssion_components/pessionslist') }, 
        meta:{
            title:'权限列表',
            icon: 'el-icon-setting',
            roles: ['admin','kfadmin']
        }
      }, 
      {
        path: '/roleslist',
        name: 'roleslist',
        component:()=>{ return import('@/view/Layout/users/role_components/roleslist') }, 
        meta:{
            title:'角色列表',
            icon: 'el-icon-setting',
            roles: ['admin','kfadmin']
        }
      },
      {
        path: '/rolesedit',
        name: 'rolesedit',
        component:()=>{ return import('@/view/Layout/users/role_components/rolesedit') }
      },
      {
        path: '/test',
        name: 'test',
        component:()=>{ return import('@/view/Layout/test') }, 
        meta:{
            title:'系统设置',
            icon: 'el-icon-setting',
            roles: ['admin','kfadmin']
        }
      }
    ]
  }]