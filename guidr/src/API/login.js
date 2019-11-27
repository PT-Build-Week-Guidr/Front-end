import React, { useState } from "react";
import api from "./AxiosHeader";

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
        placeholder="password"
        value={userAuth.password}
        onChange={handleChange}
      ></input>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default Login;

