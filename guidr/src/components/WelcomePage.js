import React, { useState } from "react";
import { Button } from 'reactstrap';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import api from "../API/axiosHeader";


function WelcomePage() {

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
            <NavBar />
            <img className="img-align" src="./images/logo.png" alt="Guidr Logo"></img>
            <br />
            <h1>Welcome to Guidr!</h1>
            <br />
            <form onSubmit={handleSubmit} className="login-form">
                <label>
                    Username:
                <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={userAuth.username}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>
                    Password:
                   <input
                         type="text"
                         name="password"
                         placeholder="Password"
                         value={userAuth.password}
                         onChange={handleChange}
                    />
                </label>
                <button color="success" tag={Link} to='/'>Submit</button>{' '}

            </form>
            <br />
            <br />
            <p>Don't have an account? Click here to create one:</p>
            <Button color="success" tag={Link} to='/'>Sign Up</Button>{' '}

        </section>
    );
}

export default WelcomePage;