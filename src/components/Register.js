import React,{useState} from 'react'
import axios from 'axios'
import { Button, Paper, TextField } from '@mui/material'
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import {toast, Toast,ToastContainer} from "react-toastify"


function Register() {
    const [data,setdata]=useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    const ChangeHandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
        console.log(data)


    }
    const SubmitHandler=(e)=>{
        e.preventDefault();
        axios.post('https://authanticaion-nodejs.herokuapp.com/start/register',data).then((res)=>{
            toast.success("Register Sucessfully",{
                position:"top-center"
              })
            console.log(res.data,"hgvhvuvhgvfgcfy")
            console.log("sucessshelllo")
        }).catch((err)=>{
            toast.error("Register Failure",{
                position:"top-center"
              })
        })
        e.target.reset();

    }
  return (
    <div style={{ backgroundImage: `url(${img2})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',width: '100vw',height: '100vh'}}>
        <center>
            <br/><br/><br/><br/>
        <Paper style={{height:"70vh",width:"60vh",backgroundImage: `url(${img3})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}} >
<br/>
       
            <h3 style={{color:"blue"}}>Register</h3>
            <br/>
            <form onSubmit={SubmitHandler}>
            <TextField id="outlined-basic" size="small" label="username" variant="outlined"type="text" onChange={ChangeHandler} name='username'  /><br/><br/>
            <TextField id="outlined-basic" size="small" label="email" variant="outlined"type="text" onChange={ChangeHandler} name='email'  /><br/><br/>
            <TextField id="outlined-basic" size="small" label="password" variant="outlined"type="text" onChange={ChangeHandler} name='password'  /><br/><br/>
            <TextField id="outlined-basic" size="small" label="confirmpassword" variant="outlined"type="text" onChange={ChangeHandler} name='confirmpassword'  /><br/><br/>
            <TextField style={{color:"blue",backgroundColor:"orange"}} size="small"  type="submit" value="Register"/>
    
            </form>

             <p>Already Have An Account<Link to="/Login">Login</Link></p>
            <ToastContainer/>
        </Paper>
        </center>
        
    </div>
  )
}

export default Register