/*
 * @Description: 菜单获取
 * @Author: zlx
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-28 14:52:38
 * @LastEditTime: 2019-05-23 15:12:55
 */
import request from '@/until/request'
export function getmenu(paramter) { 
    return request({
        url: "/Menu/GetMenusByRoleID",
        method: 'get',
        params: paramter
    })
}