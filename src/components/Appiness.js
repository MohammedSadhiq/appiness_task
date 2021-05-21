import React,{useState, useEffect} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import {useSelector,useDispatch} from 'react-redux';

const Appiness = (props) =>{

    const history = useHistory()

    const islogged = useSelector((state)=>{
        return state.login
    })

    useEffect(()=>{
        if(islogged){
           history.push('/dashboard')
        }
        else{
            history.push('/')
        }
    },[islogged])

    return(<div>
        
        
            <Route path="/" exact={true} component={Login} />
            <Route path="/dashboard" component={Dashboard} />
       
    </div>)
}

export default Appiness