import React ,{useState,useContext}from 'react'
import {useNavigate} from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import { store } from '../App'
import Typography from '@mui/material/Typography';
import { Button, IconButton, Toolbar } from '@mui/material';
import { Card, Paper } from '@mui/material'

function NavBar() { 
    const navigate=useNavigate()
    const [token,settoken]=useContext(store)
  return (
    <div>
<AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quize
          </Typography>
          {
        !token && 
        <div>
        <Button color="inherit" onClick={()=>navigate("/Register")}>Register</Button>
    <Button color="inherit" onClick={()=>navigate("/Login")}>Login</Button>
    </div>
}
        </Toolbar>
      </AppBar>
   </div>    
  )
}

export default NavBar
