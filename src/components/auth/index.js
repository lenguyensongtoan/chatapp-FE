import React, {useState} from 'react'
import Loading from "components/elements/Loading";
import Signin from "./signin";
import Signup from "./signup";
import ForgotPasswordComponent from "./forgot-password"

const Auth = () => {
  const [isLoading, setIsLoading]= useState(false)
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <Signin isLoading={isLoading} setIsLoading={setIsLoading}/>
          <Signup isLoading={isLoading} setIsLoading={setIsLoading}/>
          <ForgotPasswordComponent setIsLoading={setIsLoading}/>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="" className="image" alt="" />
        </div>
      </div>
     {isLoading &&( <Loading/>)}
    </div>
  );
};

export default Auth;
