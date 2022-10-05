import React,{useState,useContext, createContext} from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Displayanswer from './components/Displayanswer'
import FinalMarks from './components/FinalMarks'
import Login from './components/Login'
import MyProfile from './components/MyProfile'
import NavBar from './components/NavBar'
import NavigationBar from './components/NavigationBar'
import Register from './components/Register'

export const store= createContext()
function App() {
  const [token,settoken]=useState(null)
  const [mydata,setmydata]=useState(null)
  return (
    <div>
      <store.Provider value={[token,settoken,mydata,setmydata]} >
      <Router>
      <NavBar/>
      <Routes>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Profile' element={<MyProfile/>}/>
        <Route path="/displayAnswer" element={<Displayanswer/>}/>
        <Route path="/FinalMarks" element={<FinalMarks/>}/>


      </Routes>
    </Router>
      </store.Provider>
    
 

    </div>
   
  )
}

export default App