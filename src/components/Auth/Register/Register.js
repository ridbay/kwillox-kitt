import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import classes from "./Register.module.css";
import axios from "axios";
const Register = () => {
  const history = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleRegister = async () => {
    try {
      const registeration_data = {
        email,
        first_name: firstName,
        last_name: lastName,
        phone_number:phoneNumber,
        age,
        password,
      };
      const register = await axios.post(
        "https://kwillox-web-app.herokuapp.com/auth/register",
        registeration_data
      );
      //Take the user to the dashboard
      history("/dashboard/meal-item");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.login}>
        Register
        <div style={{ marginTop: 10 }}>
          First Name
          <br />
          <input
            type="text"
            value={firstName}
            onChange={handleChangeFirstName}
          />
        </div>
        <div style={{ marginTop: 10 }}>
          Last Name
          <br />
          <input type="text" value={lastName} onChange={handleChangeLastName} />
        </div>
        <div style={{ marginTop: 10 }}>
          Age
          <br />
          <input type="text" value={age} onChange={handleChangeAge} />
        </div>
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
        <div style={{ marginTop: 10 }}>
          Phone Number
          <br />
          <input
            type="text"
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
          />
        </div>
        <br />
        <input
          type="button"
          value={loading ? "Loading..." : "Register"}
          onClick={handleRegister}
          disabled={loading}
        />
        <br />
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
