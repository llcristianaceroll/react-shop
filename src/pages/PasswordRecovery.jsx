import React from "react";  
import '../styles/PasswordRecovery.scss'
import logo from '@logos/logo_yard_sale.svg'
import email from '@icons/email.svg'


const PasswordRecovery = () => {
    return (
        <div className="PasswordRecovery">
        <div className="PasswordRecovery-container">
          <img src={logo} alt="logo" className="PasswordRecovery-logo"/>
    
          <h1 className="PasswordRecovery-title">Email has been sent!</h1>
          <p className="PasswordRecovery-subtitle">Please check your inbox for instructions on how to reset the password</p>
    
          <div className="email-image">
            <img src={email} alt="email"/>
          </div>
    
          <button className="primary-button login-button">Login</button>
    
          <p className="resend">
            <span>Didn't receive the email?</span>
            <a href="/">Resend</a>
          </p>
        </div>
      </div>
    );
}

export default PasswordRecovery ;
