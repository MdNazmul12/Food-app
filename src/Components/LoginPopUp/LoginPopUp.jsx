import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {

    const [currState,setCurrState] = useState('Log In')
  return (
    <div className='login-PopUp'>
        <form  className="login-popUp-container">
            <div className="login-popUp-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-PopUp-input">
                {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
                
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Your PassWord' required />
            </div>
            <button>{currState==="Sing Up"?"Create Account":"Login"}</button>
            <div className="popUp-condition">
                <input type="checkbox" required />
                <p>By Counting i agree to the terms of use & privacy policy </p>
            </div>
            {currState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrState("Sing Up")}>Click Here</span></p>
            :<p>Already have an account <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
        }
            
            
        </form>


    </div>
  )
}

export default LoginPopUp