import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../utils/auth'

function Header() {
  return (
    <div className='bg-dark text-light p-2 d-flex justify-content-between container'>
      <div>
        <h3 ><Link style={{ color: "#FFF", textDecoration: "none" }} to='/'>Giphy4U</Link></h3>
        <h5>{Auth.loggedIn() && `Welcome ${Auth.getProfile().data.username}` }</h5>
      </div>
      
      {
        Auth.loggedIn() ? (<div className='d-flex p-2 justify-content-around'>
        <h5 className='m-1'><Link to='/dashboard' style={{ color: "#FFF",textDecoration:"none"}}>Dashboard</Link></h5>
        <h5 className='m-1'><Link to='/'style={{color: "#FFF", textDecoration:"none"}} onClick={()=>Auth.logout()}>Logout</Link></h5>
      </div>) :(<div className='d-flex p-2 justify-content-around'>
        <h5 className='m-1'><Link to='/login' style={{ color: "#FFF",textDecoration:"none"}}>Login</Link></h5>
        <h5 className='m-1'><Link to='/signup' style={{color: "#FFF", textDecoration:"none"}}>Signup</Link></h5>
      </div>)
      }
  </div>)
}
export default Header