import axios from 'axios';

export const startLogin = (formData)=>{

    return (dispatch)=>{
        axios.get('/login.json')
            .then((response)=>{
                const result = response.data;
            // validating the credentials with user input    
                if(result.username === formData.username && result.password===formData.password){
                   
                    Promise.all([dispatch(login(result)),  dispatch(getData())]).then(values => { 
                        console.log('values',values); 
                      });
                }
                else{
                    dispatch(invalidData)
                }
            })
            .catch((err)=>{
                alert('err',err)
            })
    }
}
//actionGenerator for login
const login =(responseData)=>{
    return {type:'LOGIN', payload:responseData}
}

//actionGenerator for invalid credentials
const invalidData = {
    type:'INVALID_LOGIN_DATA'
}
// action for logout
export const logOut = {
    type:'LOG_OUT'
}
 
//action generator for getting dashboard data
export const getData = ()=>{

    return (dispatch)=>{
        axios.get('/data.json')
            .then((response)=>{
                const result = response.data;
                console.log('data',result)
                dispatch({type:'USER_DATA', payload:result})
            })
            .catch(err=>{
                alert('invalid response')
            })
    }
}