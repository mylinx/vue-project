/*
 * @Description: 登陆API
 * @Author: zlx
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-28 14:52:38
 * @LastEditTime: 2019-05-09 15:57:26
 */
import request from '@/until/request'


export function userlist(paramter) { 
    
    return request({
        url: '/UserSystem/GetUserList',
        method: 'get',
        params: paramter
    })
}

export function useredit(paramter,url) {
  
    return request({
        url: url,
        method: 'post',
        data: paramter
    })
}

export function userdelete(paramter) { 
    return request({
        url: '/UserSystem/deleteUser',
        method: 'delete',
        params: paramter
    })
}


export function userdetails(paramter) { 
    return request({
        url: '/UserSystem/detailsUser',
        method: 'get',
        params: paramter
    })
}