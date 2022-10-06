import React from 'react'

function Login() {
  return (
    <div className='border border-dark p-3 bg-dark' style={{height:'88vh'}}>
      <form action="" className='border border-dark p-3'>
        <input type="text" required placeholder='email' /> <br /><br />
        <input type="password" required placeholder='password'/><br /><br />
        <input type="submit" value="LOGIN" />
      </form>
    </div>
  )
}

export default Login