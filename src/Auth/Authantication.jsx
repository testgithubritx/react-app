import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const Authantication=()=>{
    return(
        <>
        <Router>

          <Navbar/>
          <Routes>
          <Route path='/' element= {<ProtectedRoute Component={Home}/>}/>
          <Route path='/about' element= {<ProtectedRoute Component={About}/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/login' element={<Login/>}/>
          </Routes>

        </Router>
        </>
    )
}
export default Authantication;