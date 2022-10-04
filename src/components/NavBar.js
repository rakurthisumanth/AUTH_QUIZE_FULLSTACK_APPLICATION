import React ,{useState,useContext}from 'react'
import {useNavigate} from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import { store } from '../App'
import Typography from '@mui/material/Typography';
import { Button, IconButton, Toolbar } from '@mui/material';
import { Card, Paper } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, Navigate} from "react-router-dom"


function NavBar() { 
    const navigate=useNavigate()
    const [token,settoken]=useContext(store)
    const [mydata,setmydata]=useContext(store)
    const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const HandleLogout=()=>{
   
    settoken(null)

  }
  const handleClose = () => {
    setAnchorEl(null);
  };

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
{
  token &&
  <div style={{display:"flex"}}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Button color="inherit"> {mydata.username}  </Button>
<MenuIcon
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{marginTop:"9px"}}
      />
      
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={HandleLogout}>Logout</MenuItem>
      </Menu>
  </div>

}
        </Toolbar>
      </AppBar>
   </div>    
  )
}

export default NavBar
