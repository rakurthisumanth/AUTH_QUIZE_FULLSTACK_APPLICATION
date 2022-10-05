import React,{useState,useContext,useEffect} from 'react'
import { store } from '../App'
import {useNavigate} from "react-router-dom"




const Displayanswer = ({marks,count}) => {
    const navigate=useNavigate()

    const [state,setstate]=useState()


    console.log(count,"countvcount")
    const data=()=>{
        const da=marks.reduce((a,b)=>(a+b),0)
        return setstate(da*10)
    }
  
    return (
        <div>
          <br/><br/>
<button onClick={data}>Submit</button> 


   {  state?<h1>Your Marks Is {state}/{count*10}</h1>:null }    
        </div>

    )
}

export default Displayanswer
