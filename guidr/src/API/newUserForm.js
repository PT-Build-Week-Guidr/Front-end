import React, { useState } from "react";
import api from "./axiosHeader";

const SignUp = () => {
  const [userAuth, setUserAuth] = useState({
    username: "",
    password: "",
    email: "",
    full_name: ""
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
      .post("https://guidr-project.herokuapp.com/users/signUp")
      .then(res => {
          console.log(res.data)
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
        placeholder="Password"
        value={userAuth.password}
        onChange={handleChange}
      ></input>
       <input
        type="text"
        name="email"
        placeholder="email"
        value={userAuth.email}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="full_name"
        placeholder="full name"
        value={userAuth.full_name}
        onChange={handleChange}
      ></input>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;