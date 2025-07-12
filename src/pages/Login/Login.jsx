import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'

const Login = () => {

  const [signUp,setSignUp] = useState("Sign Up")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const user_auth = async (event)=> {
    event.preventDefault()
    if (signUp === "Sign Up") {
      await signup(email, password)
    }else {
      await login(name, email, password)
    }
  }

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
          {signUp === "Sign Up"?<input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='Name'/>:""}
          <input type="email" placeholder='Email'  value={email} onChange={(e)=> setEmail(e.target.value)}/>
          <input type="password" placeholder='Password'  value={password} onChange={(e)=> setPassword(e.target.value)}/>
          <button onClick={user_auth} type='submit'>{signUp}</button>
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
