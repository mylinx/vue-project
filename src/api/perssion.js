/*
 * @Description: 登陆API
 * @Author: zlx
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-28 14:52:38
 * @LastEditTime: 2019-05-23 15:12:41
 */
import request from '@/until/request'


export function Getperssion() { 
    return request({
        url: "/Routers/GetPersion",
        method: 'get'
    })
}
 