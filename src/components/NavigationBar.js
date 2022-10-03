import React ,{useState,useContext}from 'react'
import {useNavigate} from "react-router-dom"
import { store } from '../App'
function NavigationBar() {
    const navigate=useNavigate()
    const [token,settoken]=useContext(store)
  return (
    <div>
      {
        !token && 
        <div>
        <button onClick={()=>navigate("/Register")}>Register</button>
    <button onClick={()=>navigate("/Login")}>Login</button>
    </div>
}

  
    </div>
       
  
  )
}

export default NavigationBar