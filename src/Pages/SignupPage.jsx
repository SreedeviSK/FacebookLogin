import React from 'react'
import './signuppage.css'

const SignupPage = () => {
 
  return (
        <>
      <div className="header">
        <div className="main">
        <div className="signup">
        <div className="top">
          <div>
            <h2>Sign Up</h2>
            <p>it's quick and easy</p>
          </div>
          <img src="/cross.png" alt="" onclick="hide()" />
        </div>
        <hr />
        <form action="#" class="signup_form">
          <div className="signup_body">
            <div className="name">
              <input
                type="text"
                placeholder="First Name"
                id="firstname"
                className="same"
              />
              <input
                type="text"
                placeholder="Surame"
                id="surname"
                className="same"
              />
            </div>
            <div className="bottom">
              <input
                type="text"
                placeholder="Email or Phone Number"
                id="signup_e_p"
              />
              <input
                type="password"
                placeholder="New Password"
                id="newpassword"
              />
            </div>
          </div>

          <div className="birthday">
            <p className="text">Date of birth</p>
            <div className="date">
              <select id="month" name="month"></select>
              <select id="month" name="month"></select>
              <select name="" id=""></select>
            </div>
          </div>
          <div className="gender">
            <p className="text">Gender</p>
            <div className="person">
              <div>
                  <label for="Femal">Female</label>
                <input
                  type="radio"
                  id="Female"
                  name="fav_language"
                  value="Female"
                />
              </div>
               
              <div>
                  <label for="Male">Male</label>
                <input
                  type="radio"
                  id="Male"
                  name="fav_language"
                  value="Male"
                />
              </div>
               
              <div>
                  <label for="Custom">Custom</label>
                <input
                  type="radio"
                  id="Custom"
                  name="fav_language"
                  value="Custom"
                />
              </div>
            </div>
          </div>
          <div className="content">
            <p>
              People who use our service may have uploaded your contact
              information to Facebook. <span class="blue">Learn more.</span>
            </p>
            <p>
              By clicking Sign Up, you agree to our Terms,
              <span className="blue">Privacy Policy and Cookies Policy</span>. You
              may receive SMS Notifications from us and can opt out any time.
            </p>
          </div>
          <button className="signup-btn" onclick="validate()">Sign Up</button>
        </form>
      </div>
        </div>
      </div>
    </>
      
  )
}

export default SignupPage
