import * as login from '@/api/login'
import { setToken } from "@/until/auth";

export const loginSystem = ({ commit }, userinfo) => {
    return new Promise(function (resolve, reject) {
        login.LoginSystemName(userinfo).then(res => {
            const data = res.data;
            if (data.verifiaction) {
                setToken(data.rows.AccessToken);
                commit("SET_TOKNE",data.rows.AccessToken)
                commit("SET_UID", data.rows.UserId)
                commit("SET_NAME", data.rows.UserName) 
            }
            resolve(data);
        }).catch(erro => {
            reject(erro);
        })
    })
}