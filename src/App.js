import React,{useState,useContext, createContext} from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './components/Login'
import MyProfile from './components/MyProfile'
import NavigationBar from './components/NavigationBar'
import Register from './components/Register'

export const store= createContext()
function App() {
  const [token,settoken]=useState(null)
  return (
    <div>
      <store.Provider value={[token,settoken]} >
      <Router>
      <NavigationBar/>
      <Routes>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Profile' element={<MyProfile/>}/>
      </Routes>
    </Router>
      </store.Provider>
      

    </div>
   
  )
}

export default App