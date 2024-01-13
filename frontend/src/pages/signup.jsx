import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './reg.css'
export default function () {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[pass,setpass]=useState('')
    const navigate=useNavigate()
 const sub=async()=>{
         console.log(name,email,pass)
         const check=/^[a-zA-Z0-9._-]+@gmail\.com$/
         if(!check.test(email)){
            alert('Email format is wrong')
         }
         
         else{
            try{
                const response=await axios.post('http://localhost:8080/api/auth/reg',{name:name,email:email,password:pass})
                const{message}=response.data
                console.log(response.data)
               
                if(message=='already exists'){
                    alert('email already exists')
                   
                }else{
                    localStorage.setItem('chat-app-user',JSON.stringify(response.data))
                    sessionStorage.setItem('chat-app-token',JSON.stringify(response.data))

                    navigate('/Jhat')
                }
            }catch(e){
                console.log(e)
            }

         }
    }

  return (
    <>
     <div className='login'>
    <div className='bx1'>
      <img src='https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D' className='i1'>

      </img>
     
     

</div>
<div className='bx2'>
   <h1>Sign Up</h1>
   <input type='text' placeholder='Name' className='ip1' name='username' value={name} onChange={(e)=>setname(e.target.value)}></input>
      <input type='text' placeholder='Email' className='ip2' name='username' value={email} onChange={(e)=>setemail(e.target.value)}></input>
      <input type='password' placeholder='Password' className='ip3' name='password' value={pass} onChange={(e)=>setpass(e.target.value)}></input>
      <button className='br1' onClick={sub}>Register</button>
     

   </div>

    

    </div>
    </>
  )
}
