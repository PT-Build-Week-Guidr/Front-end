import React, { useState } from "react";
import api from "./axiosHeader";

function Login() {
  const [userAuth, setUserAuth] = useState({
    username: "",
    password: ""
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
      .get("https://guidr-project.herokuapp.com/trips", userAuth)
      .then(res => {
        localStorage.setItem("token2", res.data.payload);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
<form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={userAuth.username}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="password"
        placeholder="Password"
        value={userAuth.password}
        onChange={handleChange}
      ></input>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default Login;

