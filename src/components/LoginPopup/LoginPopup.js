import React from 'react'
import { Login } from './LoginPopup.style';
import { Link } from "react-router-dom";

const LoginPopup=()=> {
  return (
    <Login>
        <div className='details border'>Login</div>
        <input type="tel" placeholder='Enter your phone number' className='input'></input>
        <Link to="/checkout" className='link'>
          <button type='submit' className='button'>Submit</button>
        </Link>
        <div className='LaterText'>Will do it later</div>
    </Login>
  )
};

export default LoginPopup