import React from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom'

export default function HomePage() {
  //html to render the home page
  return (
    <div>
      <div className="home-page">
         <div id='header'>
            <div id='header-logo'>
              <img id='logo' src="https://i.pinimg.com/1200x/85/f6/ae/85f6ae20307bc7f27d8ef868f1849459.jpg" alt='logo' />
              <div id='header-text'>AI-INSURANCE</div>
            </div>
            <div id='header-actions'>
              <button id='header-login'>
                <Link to="/login">Login</Link>
              </button>
              <button>
                <Link to="/signup">Sign Up</Link>
              </button>
            </div>
         </div>
         <div id='content'>content</div>
         <div id='footer'>
            <div id='footer-text'>Copyright &copy; 2026 AI-INSURANCE. All rights reserved.</div>
         </div>
      </div>
    </div>
  )
}
