

export const SET_TOKNE=(state,token)=>{
    state.token=token

}



export const SET_NAVBAR=(state,navbar)=>{
    state.navbar=navbar
    localStorage.setItem('navbar',JSON.stringify(navbar));
}



export const SET_UID=(state,uid)=>{
    state.uid=uid
    localStorage.setItem('uid',uid);
}




export const SET_NAME=(state,name)=>{
    state.name=name
    localStorage.setItem('name',name);
}