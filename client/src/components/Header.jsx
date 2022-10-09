import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../utils/auth'
import {motion} from "framer-motion"
function Header() {
  return (
    <div className='bg-dark text-light p-2 d-flex justify-content-between container'>
      <div>
        <motion.h3 whileHover={{scale:1.2}} className='p-2'><Link style={{ color: "#FFF", textDecoration: "none" }} to='/'>Giphy4U</Link></motion.h3>
        <h5>{Auth.loggedIn() && `Welcome ${Auth.getProfile().data.username}` }</h5>
      </div>
      
      {
        Auth.loggedIn() ? (<div className='d-flex p-2 justify-content-around'>
        <motion.h5 className='m-1'><Link to='/dashboard' style={{ color: "#FFF",textDecoration:"none"}}>Dashboard</Link></motion.h5>
        <motion.h5 className='m-1'><Link to='/'style={{color: "#FFF", textDecoration:"none"}} onClick={()=>Auth.logout()}>Logout</Link></motion.h5>
      </div>) :(<div className='d-flex p-2 justify-content-around'>
        <motion.h5 whileHover={{scale:1.2}} className='m-1 p-1'><Link to='/login' style={{ color: "#FFF",textDecoration:"none"}}>Login</Link></motion.h5>
        <motion.h5 whileHover={{scale:1.2}} className='m-1 p-1'><Link to='/signup' style={{color: "#FFF", textDecoration:"none"}}>Signup</Link></motion.h5>
      </div>)
      }
  </div>)
}
export default Header