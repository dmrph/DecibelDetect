import React from 'react'
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import {Link} from 'react-router-dom';

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "black"
  
  };

export const LoginForm = () => {
  return (
    <div className="back">
        <div className = 'wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label ><input type="checkbox" /> Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>

                <button type="submit">
                    <Link to='/Home' style = {linkStyle}>Login</Link>
                </button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginForm;