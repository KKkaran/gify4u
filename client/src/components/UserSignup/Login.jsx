import React,{useState} from 'react'
import { useMutation } from '@apollo/client';
import { login_user } from '../../utils/queries'
import Auth from '../../utils/auth';
function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(login_user);

  // update state based on form input changes
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

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token)
      console.log(data);
  } catch (e) {
    console.error(e);
  }
    // clear form values
    // setFormState({
    //   email: '',
    //   password: '',
    // });
  };
  return (
    <div className='border border-dark p-3 bg-dark text-light' style={{height:'88vh'}}>
      <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email' required
                value={formState.email}
                onChange={handleChange}
              /> <br/> <br/>
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password' required
                value={formState.password}
                onChange={handleChange}
              /> <br/> <br/>
              <input type="submit" className='btn btn-primary' name="" id="" value='LOGIN'/>
      </form><br />
      {error && <div><h5 style={{color:'red'}}>Login failed</h5></div>}
    </div>
  )
}

export default Login