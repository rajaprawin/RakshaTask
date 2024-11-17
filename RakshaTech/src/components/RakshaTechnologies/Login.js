import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const navigate=useNavigate();

  function handleSubmit(){
    if(email=='' && password ==''){ alert(' Enter Credentials')}
    if(email=='user@email.com' && password =='123'){ 
     navigate('/RDashboard') 
    }
    else{ alert(' Wrong Credentials')}
  }
  
  return (
    <div className="loginContainer">
      <div className="loginInnerContainer">
        <h2>Login</h2>
        <input
          type="text"
          value={email}
          onChange={e=>{setEmail(e.target.value)}}
          className="RloginInput"
          placeholder="Email"
        />

        <input type="password" className="RloginInput" placeholder="Password"
          onChange={e=>{setPassword(e.target.value)}}
          />

        <button className="loginButton" onClick={handleSubmit}> Login</button>
        <div className="subText">
          <p onClick={()=>alert(alert(
      "UserName =  user@email.com \n" +
        "Pwd = 123 " 
        
    ))}>
            <span className="ahilight"> Show </span>
            <span className="bhilight">Password?</span>
          </p>
          <span className="ahilight"> Don't have an account? </span>
          <span className="bhilight" >Sign up </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
