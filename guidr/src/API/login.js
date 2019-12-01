import React, { useState } from "react";
import api from "./axiosHeader";
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';


const Login = () => {
  const [userAuth, setUserAuth] = useState({
    username: "",
    password: "",
  });

  const handleChange = event => {
    setUserAuth({
      ...userAuth,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    api()
      .post("https://guidr-project.herokuapp.com/users/login", userAuth)
      .then(res => {
        console.log(res.data.token)
        console.log(res.data.id)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("id", res.data.id)

      })
      .catch(err => {
        console.log(err);
      });
  };

  return (


    <section >
    <img className="img-align" src={logo} alt="Guidr Logo"></img>
    <br />
    <br />
   <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={userAuth.username}
        onChange={handleChange}
      ></input>
       <br />
      <br />
      <input
        type="text"
        name="password"
        placeholder="password"
        value={userAuth.password}
        onChange={handleChange}
      ></input>
       <br />
      <br />
      <button type="submit" className="guidr-green-button" tag={Link} to="/home">Submit</button>
    </form>
    <br />
    <p>Don't have an account? Click here to create one:</p>
    <button color="success" tag={Link} to='/signUp'>Sign Up</button>
</section>

  );
}

export default Login;
