import React, { useRef } from "react";
import Logo from "../assets/logo.png";
import "./loginpage.css";
const LoginPage = () => {

  const username= useRef()
  const password=useRef()

  function login(){
    const uname=username.current.value
    const pwd =password.current.value
    console.log(uname,pwd)
  }
  

  const signup = () => {
    
   
  }
  
  

  return (
    <>
      <div className="header">
      <div className="layer"></div>
        <div className="main">
          <div className="left">
            <img src={Logo}/>

            <p>Facebook helps you connect and share with the people in your life.
            </p>
            
          </div>
          <div className="right">
            <form action="#">
              <div className="form_login">
                <input
                  ref={username}
                  type="text "
                  placeholder="Email address or phone number"
                />
                <input ref={password} type="password" placeholder="Password" />
                <button onClick={login} className="login">Log in</button>
                <p className="forget">Forgotten password?</p>
                <hr className="line" />
                <button className="create" onClick={signup}>
                  Create new account
                </button>
              </div>
            </form>
            <p className="foot">
              <span>Create a Page</span> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
