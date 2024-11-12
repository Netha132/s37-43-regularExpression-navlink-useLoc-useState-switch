import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function LogIn() {
  let navigate=useNavigate();
  let emailInputRef=useRef();
  let passwordInputRef=useRef();
  return (
    <div className='App'>
      <form className='loginForm'>
        <h1>LogIn</h1>
        <div>
            <label>Email</label>
            <input type='email' ref={emailInputRef}></input>
        </div>
        <div>
            <label>Password</label>
            <input type='password' ref={passwordInputRef}></input>
        </div>
        <button type='button' className='loginBtn' onClick={()=>{
         let  typeEmail=emailInputRef.current.value;
         let typePassword=passwordInputRef.current.value;

          if(typeEmail=="vivek@gmail.com" && typePassword=="vivek"){
            navigate("/home",{state:{msg:"hello"}});
          }
         else{
          alert("Invalid Email/Password")
         }
        }}>LogIn</button>

<p>New User? Create an account</p>
        <button type='button' className='signupBtn' onClick={()=>{
        navigate("/signup");
        }}>Sign Up</button>
      </form>
    </div>
  )
}

export default LogIn
