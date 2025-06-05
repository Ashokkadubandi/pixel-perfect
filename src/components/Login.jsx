import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/signup.css'

const Login = () => {
  return (
    <div className='layout'>
      <div className='signup-container'>
        <h4 className='signup-header'>Signin to your PopX account</h4>
        <p className='sign-in-desc'>Lorem ipsum dolor sit amet,consecteuar adipiscing elit.</p>
        <form className='sign-form'>
            <div className='inp-container'>
                <label className='inp-label' htmlFor='email'>Email Address</label>
                <input type='text' className='inp-input' placeholder='Enter email address' />
            </div>
            <div className='inp-container'>
                <label className='inp-label' htmlFor='password'>Password</label>
                <input type='text' className='inp-input' placeholder='Enter password'/>
            </div>
            <Link to={'/home'}>
            <button className='sub'>Login</button>
            </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
