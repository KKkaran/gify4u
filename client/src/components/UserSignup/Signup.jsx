import React,{useState} from 'react'
import { useMutation } from '@apollo/client'
import {add_user} from '../../utils/queries'
import Auth from '../../utils/auth';
function Signup() {

  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(add_user);

  const handleChange = (event) => {
  const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  // use try/catch instead of promises to handle errors
  try {
    // execute addUser mutation and pass in variable data from form
    const { data } = await addUser({
      variables: { ...formState }
    });
    Auth.login(data.addUser.token)
  } catch (e) {
    console.error(e);
  }



  };
  return (
    <div className='border border-dark p-3 bg-dark' style={{height:'88vh'}}>
      <form onSubmit={handleFormSubmit} className=''>
              <input
                className='form-input'
                required
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              /> <br /><br />
              <input
                className='form-input'
                required
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              /> <br /><br />
              <input
                className='form-input'
                required
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              /> <br /><br />
              <input type="submit" className='btn btn-primary' name="" id="" value='SIGNUP'/>
      </form> <br />
      {error && <div><h5 style={{color:'red'}}>Signup failed</h5></div>}
    </div>
  )
}

export default Signup