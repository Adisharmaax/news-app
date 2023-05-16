import React, { useState } from "react";
// import logo from './logo.svg';
import './login.css';
import { Login1 } from "./Login1";
import { Register } from "./Register";

const Login = () => {
    const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    
    
    <div className="App" >
      {
        currentForm === "login" ? <Login1 onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>

  )
}

export default Login