import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch} from 'react-redux';
import { startLogin } from '../../Actions/configureActions';
import './login.css'

const Login = ()=>{

    const [username,setusername ] = useState('');
    const [password,setpassword] = useState('');
    const dispatch = useDispatch();

    const islogged = useSelector((state)=>{
        return state.login
    })
    
    useEffect(()=>{
      //  dispatch(startLogin())
      console.log('islogged',islogged)
    },[])

    const handleUserNameInput = (e) =>{
        const value = e.target.value;
        setusername(value)
    }

    const handlePasswordInput = (e) =>{
        const value = e.target.value;
        setpassword(value)
    }
    
    const handleLogin = (e)=>{
        e.preventDefault();
        const formData = {
            username:username,
            password:password
        }
        dispatch(startLogin(formData))
      //  console.log('credentials', credentials)
    }

    return(<div>
        <div className="main_container">
        <div className="child_container">
        <form onSubmit={handleLogin} >
        <h1>Appiness Interactive</h1>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" value={username} onChange={handleUserNameInput}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={handlePasswordInput}/>
            </div>
           
                <input type="submit" value="Login"/>
            {(!islogged)?<span>Enter Valid credentials</span>:<span></span>}
        </form>
        </div>
        </div>
        </div>)
}

export default Login