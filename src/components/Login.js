import React,{useState,useContext} from 'react'
import axios from 'axios'
import { store } from '../App'
import MyProfile from './MyProfile'
import {Navigate} from "react-router-dom"

function Login() {

    const [token,settoken]=useContext(store)
    const [data,setdata]=useState({
   
        email:"",
        password:""
        
    })

    const ChangeHandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})

    }

    const SubmitHandler=(e)=>{
        e.preventDefault();
        axios.post('https://authanticaion-nodejs.herokuapp.com/start/login',data).then((res)=>{
            settoken(res.data.token )
        })
    }
    if(token){
      return <Navigate to="/profile"/>

    }

 
  return (
    <div>
        <center>
        <form onSubmit={SubmitHandler} autoComplete="off">
            <h3>login</h3>
            <input type="text" onChange={ChangeHandler}  name='email' placeholder='email'/><br/>
            <input type="password"onChange={ChangeHandler}  name='password' placeholder='password'/><br/>
             <input type="submit" value="login"/>
        </form>
        </center>
        
    </div>
  )
}

export default Login