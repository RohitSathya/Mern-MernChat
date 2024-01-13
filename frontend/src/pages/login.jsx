import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './login.css'
export default function login({func}) {

  const[email,setemail]=useState('')
  const[pass,setpass]=useState('')
  const navigate=useNavigate()
   const sub=async()=>{
    try{
      const response=await axios.post('http://localhost:8080/api/auth/login',{email:email,password:pass})
      const{message}=response.data
      const {userdetails}=response.data
      const {token}=response.data
      if(message=='s'){
        func(email)

        console.log('success')
       console.log(userdetails)
       localStorage.setItem('chat-app-user',JSON.stringify(userdetails))
       sessionStorage.setItem('chat-app-token',JSON.stringify(userdetails))
        navigate('/Jhat')
      }
      else if(message=='f'){
        console.log('failed')
        alert('wrong credentials')
      }
      console.log(response.data)
    }catch(e){

    }
     
   }

  return (
  <>
  <div className='login'>
    <div className='brx1'>
      <img src='https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D' className='i1'>

      </img>
     
     

</div>
<div className='brx2'>
   <h1>Log In</h1>
      <input type='text' placeholder='Email' className='ip1' name='username' value={email} onChange={(e)=>setemail(e.target.value)}></input>
      <input type='password' placeholder='Password' className='ip2' name='password' value={pass} onChange={(e)=>setpass(e.target.value)}></input>
      <button className='b1' onClick={sub}>Register</button>
     

   </div>

    

    </div>
  </>
  )
}
