import axios from 'axios'
import React,{useState,useContext,useEffect} from 'react'
import { store } from '../App'
import Login from './Login'
import {Navigate, navigate} from "react-router-dom"

function MyProfile() {
    const [token,settoken]=useContext(store)
    const [data,settdata]=useState(null)
    useEffect(()=>{
        axios.get("https://authanticaion-nodejs.herokuapp.com/start/profile",{
            headers:{
                'x-token':token
            }
        }).then((res)=>{
            settdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    if(!token){
        return <Navigate to="/Login"/>
    }
  return (
    <div> 
        {
            data && 
            <center>
     <h1>Welcome To DasBoard:{data.username}</h1>  

      <button onClick={()=>settoken(null)}>  Logout</button>
            </center>
          
        }
   
     

    </div>
  )
}

export default MyProfile