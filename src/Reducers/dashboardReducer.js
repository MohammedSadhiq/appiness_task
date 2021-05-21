const initialData = [];

const dashboardReducer =(state=initialData,action)=>{
    switch(action.type){
        case 'USER_DATA':{
            return action.payload
        }

        default:{
            return state
        }
    }
}

export default dashboardReducer