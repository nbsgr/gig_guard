import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import { useRef } from 'react'

export default function Login() {
  
   {/* 
  //UseRef is used to create references to the input fields in the login form.
  //These references allow us to access the current values of the input fields when the user submits the login form. 
  //By using useRef, we can easily retrieve the username and password entered by the user without needing to manage state for these inputs.
  */}
  {/* login constants */ }
  const usernameRef = useRef();
  const passwordRef = useRef();


  {/*login function*/}
  const userlogin = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const loginData = {
      username,
      password  
    };

    console.log("Login Data:", loginData);
    alert("Login successful!");
  }


  //html to render the login form
  return (
    <div id='login-container'>
      <div id='login-form'>
        <div id='login-header'>LOGIN</div>
        <div id='login-form-fields'>
          <label >UserName</label>
          <input type="text" placeholder='Username' ref={usernameRef} />
          <label>Password</label>
          <input type="Password" placeholder='password' ref={passwordRef} />
          <label></label>
          <button onClick={userlogin}>login</button>
          <div>Already having an account?
            <Link to="/signup">Signup</Link>
          </div>
        </div>

      </div>
    </div>
  )
}
