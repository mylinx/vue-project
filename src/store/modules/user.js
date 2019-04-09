const users={
    state:{
        userinfo:{
            uid,
            name,
            roleid,
            typeid
        }
    },
    mutations:{
        getUsersInfo(state,data){
            if(data!=null)
            {
                state.userinfo.uid=data.id;
            }
            else{
                state.userinfo=null;
            }
        }   
    },
    actions:{

    }
}

export default users