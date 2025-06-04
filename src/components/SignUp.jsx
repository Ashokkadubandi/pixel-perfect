import React from 'react'
import '../styles/signup.css'

const SignUp = () => {
  return (
    <div className='layout'>
      <div className='signup-container'>
        <h4 className='signup-header'>Create your PopX account</h4>
        <form className='signup-form'>
            <div className='inp-container'>
                <lable className='inp-label' htmlFor='name'>Full Name <span>*</span></lable>
                <input className='inp-input' type='text' id='name'/>
            </div>
            <div className='inp-container'>
                <lable className='inp-label' htmlFor='phone'>Phone number<span>*</span></lable>
                <input className='inp-input' type='text' id='phone'/>
            </div>
            <div className='inp-container'>
                <lable className='inp-label' htmlFor='email'>Email address <span>*</span></lable>
                <input className='inp-input' type='text' id='email'/>
            </div>
            <div className='inp-container'>
                <lable className='inp-label' htmlFor='password'>Password<span>*</span></lable>
                <input className='inp-input' type='text' id='password'/>
            </div>
            <div className='inp-container'>
                <lable className='inp-label' htmlFor='comp'>Company name<span>*</span></lable>
                <input className='inp-input' type='text' id='comp'/>
            </div>
            <p className='signup-agency'>Are you an Agency?<span style={{color:'red'}}>*</span></p>
            <input name='same' type='radio' id='yes'/>
            <label className='agency-label' htmlFor='yes'>Yes</label>
            <input name='same' type='radio' id='no'/>
            <label className='agency-label' htmlFor='no'>No</label>
            <button className='sub signup-btn'>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
