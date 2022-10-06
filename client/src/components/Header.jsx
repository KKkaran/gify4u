import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-dark text-light p-2 d-flex justify-content-between container'>
      <h3 ><Link style={{ color: "#FFF",textDecoration:"none"}} to='/'>Giphy4U</Link></h3>
      <div className='d-flex p-2 justify-content-around'>
        <h5 className='m-1'><Link to='/login' style={{ color: "#FFF",textDecoration:"none"}}>Login</Link></h5>
        <h5 className='m-1'><Link to='/signup' style={{color: "#FFF", textDecoration:"none"}}>Signup</Link></h5>
      </div>
    </div>
  )
}

export default Header