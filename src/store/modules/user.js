const users={
    state:{ 
        userinfo:{
            uid:''
        }
    },
    mutations:{
        getUsersInfo(state,data){
            if(data!=null)
            {
                state.userinfo.uid=data;
            }
        }   
    },
    actions:{

    }
}

export default users