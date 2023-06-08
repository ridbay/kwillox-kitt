import React, { useState } from "react";
import { useNavigate,Link } from 'react-router-dom';
import classes from "./Login.module.css";
const Login = () => {
  // const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
    // history("/dashboard");
  };
  const handleChangeEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = () => {
   
  };
  
  return (
    <div className={classes.root}>
      <div className={classes.login}>
        Login
        <div>
          Email
          <br />
          <input type="text" value={email} onChange={handleChangeEmail} />
        </div>
        <div style={{ marginTop: 10 }}>
          Password
          <br />
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        {error && (
          <>
            <small style={{ color: "red" }}>{error}</small>
            <br />
          </>
        )}
        <br />
        <input
          type="button"
          value={loading ? "Loading..." : "Login"}
          onClick={handleLogin}
          disabled={loading}
        />
        <br />
        <div><Link to="/register">Register</Link></div>
      </div>
    </div>
  );
};


export default Login;
