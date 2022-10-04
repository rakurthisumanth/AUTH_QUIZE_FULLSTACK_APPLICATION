import React,{useState,useContext} from 'react'
import axios from 'axios'
import { store } from '../App'
import MyProfile from './MyProfile'
import {Link, Navigate} from "react-router-dom"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import { Paper, TextField } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'
import {toast, Toast,ToastContainer} from "react-toastify"

function Login() {

   const Alert=()=>{
    toast.success("LoginSucess",{
      position:"top-center"
    })
  

   }
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
          Alert()
            settoken(res.data.token )
          
        },)
        .catch((err)=>{
          toast.error("Incoreccort Mail/Password",{
            position:"top-center"
          })
        })
    }
    if(token){
      return <Navigate to="/profile"/>

    }
  return (
    <div style={{ backgroundImage: `url(${img2})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',width: '100vw',height: '100vh'}}>
        <center>
        <br/><br/><br/><br/><br/>

        <Paper style={{height:"60vh",width:"50vh",backgroundImage: `url(${img3})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}} >
        <form onSubmit={SubmitHandler} autoComplete="off">
        <br/><br/><br/>

        <h3 style={{color:"blue"}}>Login</h3>   
        <TextField id="outlined-basic" size="small" label="UserName" variant="outlined"type="text" onChange={ChangeHandler}  name='email' placeholder='email' /><br/><br/>
        <TextField id="outlined-basic" size="small" label="UserName" variant="outlined"type="password"onChange={ChangeHandler}  name='password' placeholder='password' /><br/><br/>

        <TextField style={{color:"blue",backgroundColor:"orange"}} size="small"  type="submit" value="login"/>
        </form>
        <br/>
        <ToastContainer/>
        <br/>
        <p>Did't have Account <Link to="/Register">Register</Link></p>
        </Paper>
        </center>
        
    </div>
  )
}

export default Login