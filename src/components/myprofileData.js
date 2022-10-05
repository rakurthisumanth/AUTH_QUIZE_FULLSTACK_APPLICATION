import React,{useState,useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Button, IconButton, Toolbar } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Card, Paper } from '@mui/material'
import QDisplay from "./QDisplay"
import Displayanswer from './Displayanswer';
import {useNavigate} from "react-router-dom"

function MyProfileData() {
  const navigate=useNavigate()

  const [marks,setMarks] = useState([]);
  let tempMarks = [];
  const handleChange = (index,mark) =>{
    tempMarks = marks
    tempMarks[index] = mark;
    setMarks([...tempMarks]);
   // alert(tempMarks);
  }
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [count,setcount]=useState(0)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [data,setdata]=useState([])
  const [idno,setidno]=useState("1")

  const [questions,setquestions]=useState([])
  
  console.log(data,"dataatatta")
  useEffect(()=>{
    axios.get("http://localhost:8080/getTasks").then(
      res=>{
        console.log(res)
        setdata(res.data)
      }
    ).catch((err)=>{
      console.log(err)
    })
    
  },[])
 
  const handleClicks=(id)=>{
    console.log(id)
    axios.get(`http://localhost:8080/GetQuestions/${id}`).then(res=>{
    console.log(res.data)
    setquestions(res.data)
   }).catch((err)=>{
    console.log(err,"err")
   })
    
   handleClose()
  }
   
  return (
    <div>
      <Button
      id="demo-customized-button"
      aria-controls={open ? 'demo-customized-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      variant="contained"
      disableElevation
      color="success"
      onClick={handleClick}
      endIcon={<KeyboardArrowDownIcon />}

      >
        QUIZE-TOPICS
        
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       
        {
            data?(
        data.map(item=>
          <div>
          <MenuItem key={item.id} onClick={()=>{handleClicks(item.id)}}>{item.topic}</MenuItem>
          </div>
          
          )):<h1>Welcome to quize</h1>
      }
      </Menu>
      <div>  
   <br/>
        <h1>Quize Application</h1>
        <div>
        {     
          questions.map((qa,index)=><QDisplay question={qa} handleChange={handleChange} index={index} marks={marks}/>)
          }
          <Displayanswer marks={marks} count={questions.length}/>
         
          </div>
     
   </div>
   
      </div>
  )
}

export default MyProfileData
