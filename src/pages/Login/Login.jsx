import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signUp,setSignUp] = useState("Sign Up")

  const handleSignInClick = () => {
    setSignUp("Sign In")
  }
  const handleSignUpClick = () => {
    setSignUp("Sign Up")
  }

  return (
    <div className='login'>
      <img src={logo} alt="" />
      <div className="login-form">
        <h1>{signUp}</h1>
        <form>
          {signUp === "Sign Up"?<input type="text" placeholder='Name'/>:""}
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <button>{signUp}</button>
          <div className="form-help">
            <div className="inner-form-help">
              <input type="checkbox" />
              <label htmlFor="Remember me ">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        {signUp === "Sign Up"?<p>Already have account? <span onClick={handleSignInClick}>Sign In Now</span></p>:<p>New to Netflix? <span onClick={handleSignUpClick}>Sign Up Now</span></p>}
                
      </div>
    </div>
  )
}

export default Login
