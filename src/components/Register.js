import React,{useState} from 'react'
import axios from 'axios'
import { Paper, TextField } from '@mui/material'
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"



function Register() {
    const [data,setdata]=useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    const ChangeHandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})

    }

    const SubmitHandler=(e)=>{
        e.preventDefault();
        axios.post('https://authanticaion-nodejs.herokuapp.com/start/register',data).then((res)=>{
            console.log(res.data)
        })
        


    }
  return (
    <div style={{ backgroundImage: `url(${img2})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',width: '100vw',height: '100vh'}}>
        <center>
            <br/><br/><br/><br/>
        <Paper style={{height:"60vh",width:"50vh",backgroundImage: `url(${img3})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}} >
<br/>
        <form onSubmit={SubmitHandler}>
            <h3 style={{color:"blue"}}>Register</h3>
            <br/>
            <TextField id="outlined-basic" size="small" label="UserName" variant="outlined"type="text" onChange={ChangeHandler} name='username' placeholder='UserName' /><br/><br/>
            <TextField id="outlined-basic" size="small" label="Email" variant="outlined"type="text" onChange={ChangeHandler} name='Email' placeholder='Email' /><br/><br/>
            <TextField id="outlined-basic" size="small" label="Password" variant="outlined"type="text" onChange={ChangeHandler} name='password' placeholder='password' /><br/><br/>
            <TextField id="outlined-basic" size="small" label="confirmpassword" variant="outlined"type="text" onChange={ChangeHandler} name='confirmpassword' placeholder='confirmpassword' /><br/><br/><br/>
             <TextField style={{color:"blue",backgroundColor:"orange"}} size="small"  type="submit" value="Register"/>
        </form>
        </Paper>
        </center>
        
    </div>
  )
}

export default Register