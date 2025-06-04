import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/wel.css'

const Welcome = () => {
  return (
    <div className='layout'>
      <div className='welcome-container'>
        <div className='welcome-card'>
        <h4 className='welcome-header'>Welcome to PopX</h4>
        <p className='welcome-desc'>Let's make a perfect design as pixel to pixel everthing is might perfect to build</p>
        <Link to={'/signup'}>
            <button className='sub'>Create Account</button>
        </Link>
        <Link className='text-decor' to={'/login'}>
            <p className='text-option'>Already Registered? Login</p>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Welcome
