import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../utils/auth'
import {motion} from "framer-motion"
function Header() {
  return (
    <div className='bg-dark text-light p-2 d-flex justify-content-between container'>
      <div>
        <motion.div whileHover={{scale:1.2}} className='d-flex '>
          <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1.5 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
          repeat: Infinity,
          repeatDelay:1
        }
      }}
    ><h1 style={{color:'#FF00FF'}}>G</h1></motion.div>
        <h3 className='pt-2 px-2'><Link style={{ color: "#FFF", textDecoration: "none" }} to='/'>iphy4U</Link></h3>
        </motion.div>
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