import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {getData, logOut} from '../../Actions/configureActions';
import './dashboard.css';

const Dashboard = ()=>{
    
    const dispatch = useDispatch();
    const history = useHistory();

  

    
    const handleLogOut = ()=>{
        dispatch(logOut)
    }

    useEffect(()=>{
        console.log('use effect')
       dispatch(getData())
        // if(users && islogged){
        //     history.push('/dashboard')
        // }
        // else{
        //     history.push('/')
        // }
    })


    const users = useSelector((state)=>{
        return state.users["user"]
    })

   const  islogged = useSelector((state)=>{
       return state.login
   })

    return(
        <div>
           
            <button className="button"  onClick={handleLogOut} >Log Out</button>
       

        <h3 className="title">Dashboard</h3>
       
    <div className="main_container1">
     
        <div className="child_container1">
          
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone No</th> 
                </tr>
            </thead>
            <tbody>
                {
                  users ? ( users.map((ele)=>{
                        return(<tr key={ele.id}>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.age}</td>
                            <td>{ele.gender}</td>
                            <td>{ele.email}</td>
                            <td>{ele.phoneNo}</td>
                        </tr>)
                    })) : (<p>Listing users</p>)
                }
            </tbody>
        </table>
        </div>
    </div>
    </div>)
}

export default Dashboard