import React from 'react'

function Signup() {
  return (
    <div className='border border-dark p-3 bg-dark' style={{height:'88vh'}}>
      <form action="" className='border border-dark p-3'>
        <input type="text" required placeholder='email' /> <br /><br />
        <input type="text" required placeholder='username' /><br /><br />
        <input type="password" required placeholder='password'/><br /><br />
        <input type="submit" value="SIGNUP"/>
      </form>
    </div>
  )
}

export default Signup