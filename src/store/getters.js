/*
 * @Description: 这是getters
 * @Author: zlx
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-07 09:29:12
 * @LastEditTime: 2019-05-08 09:47:14
 */

//token
export const token= state => {
    if(state.token===null ||  state.token=== undefined)
    {
        state.navbar= localStorage.getItem('token')
    }
    return state.token
}
 

//导航
export const navbar = state => {
    if(state.navbar===null ||  state.navbar=== undefined)
    {
        state.navbar=JSON.parse(localStorage.getItem('navbar'))
    }
    return state.navbar
}


//用户id
export const uid = state =>{
    if(state.uid===null ||  state.uid=== undefined)
    {
        state.uid=localStorage.getItem('uid')
    }
    return state.uid
}



//用户名
export const name = state => {
    if(state.name===null ||  state.name=== undefined)
    {
        state.name=localStorage.getItem('name')
    }
    return state.name
}

