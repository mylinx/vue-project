/*
 * @Description: 登陆API
 * @Author: zlx
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-28 14:52:38
 * @LastEditTime: 2019-05-07 16:47:07
 */
import request from '@/until/request'


export function LoginSystemName(userinfo) { 
    return request({
        url: '/Home/GetToken',
        method: 'post',
        data: userinfo
    })
}



export function loginOut(uid) { 
    return request({
        url: '/Home/LoginOut',
        method: 'post',
        params:{
            uid:uid
        }
    })
}