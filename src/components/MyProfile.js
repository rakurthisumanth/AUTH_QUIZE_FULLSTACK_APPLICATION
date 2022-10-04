import axios from 'axios'
import React,{useState,useContext,useEffect} from 'react'
import { store } from '../App'
import Login from './Login'
import {Navigate, navigate} from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Button, IconButton, Toolbar } from '@mui/material';

function MyProfile() {
    const [token,settoken]=useContext(store)
    const [mydata,setmydata]=useContext(store)
    useEffect(()=>{
        axios.get("https://authanticaion-nodejs.herokuapp.com/start/profile",{
            headers:{
                'x-token':token
            }
        }).then((res)=>{
            setmydata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    if(!token){
        return <Navigate to="/Login"/>
    }
  return (
    <div> 
    
   
     

    </div>
  )
}

export default MyProfile