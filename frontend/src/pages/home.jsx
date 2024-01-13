import React, { useEffect, useState } from 'react'
import {useNavigate} from  'react-router-dom'
import './home.css'
export default function () {

    const navigate=useNavigate()

  

  return (
    <>
    <div className='chat-home'>
      <div className='content'>
        <h1 style={{color:'orange'}}>Welcome to Doggy Chat App</h1><br/>
      </div>

      <div className='cta-buttons'>
      <button className="login-button"  onClick={()=>navigate('/login')} >Log In</button>
          <button className="signup-button" onClick={()=>navigate('/signup')}>Sign Up</button>
      </div>

    </div>
  

    </>
  )
}
