import React,{useState} from 'react'
import axios from 'axios'
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
    <div>
        <center>
        <form onSubmit={SubmitHandler}>
            <h3>Register</h3>
            <input type="text" onChange={ChangeHandler} name='username' placeholder='UserName'/><br/>
            <input type="text" onChange={ChangeHandler}  name='email' placeholder='email'/><br/>
            <input type="password"onChange={ChangeHandler}  name='password' placeholder='password'/><br/>
            <input type="password"onChange={ChangeHandler}  name='confirmpassword' placeholder='confirmpassword'/><br/>
             <input type="submit" value="Register"/>
        </form>
        </center>
        
    </div>
  )
}

export default Register