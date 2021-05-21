const initialState = false;

const loginReducer =(state=initialState, action) =>{

    switch(action.type){

        case 'LOGIN':{
            return true
        }
        case 'INVALID_LOGIN_DATA':{
            return false
        }

        case 'LOG_OUT':{
            return false
        }

        default :{
            return state
        }
    }
}

export default loginReducer