import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'
import { useRef } from 'react'  

export default function Signup() {
  //signup constants
  const usernameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();  

  //signup function
  const usersingup = () => {
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
      const userData = {
        username,
        email,
        phone,
        password
      };
      console.log("User Data:", userData);
      alert("Signup successful!"); 
  }

  //html to render the signup form
  return (
    <div id='signup-container'>
      <div id='signup-form'>
        <div id='signup-header'>SIGN UP</div>
        <div id='signup-form-fields'>
          <label>UserName</label>
          <input type="text" placeholder='Username' ref={usernameRef} />
          <label>Email</label>
          <input type="email" placeholder='Email' ref={emailRef} />
          <label >Phone number</label>
          <input type="text" placeholder='Phone number' ref={phoneRef}   />
          <label>Password</label>
          <input type="Password" placeholder='password' ref={passwordRef} />
          <label>Confirm Password</label>
          <input type="Password" placeholder='Confirm password' ref={confirmPasswordRef}   />
          <button onClick={usersingup}>Sign Up</button>
            <div>Already having an account?
              <Link to="/login">Login</Link>
            </div>
        </div>
      </div>
    </div>
  )
}
