import React, { useState } from "react";
import { Button } from 'reactstrap';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import api from "../API/axiosHeader";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import logo from '../images/logo.png';
import SignUp from "../API/newUserForm"

function WelcomePage() {

      const handleSubmit = event => {
        event.preventDefault();
        api()
          .post("https://guidr-project.herokuapp.com/users/login", {})
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
            <h1>Welcome to Guidr!</h1>
            <br />
            <Form onSubmit={handleSubmit} className="login-form">
                <label>
                    Username:
                <input
                        type="text"
                        name="username"
                        placeholder="Username"
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
                    />
                </label>
                <br/>
                <br/>
                <button color="success" tag={Link} to='/'>Submit</button>{' '}

            </Form>
            <br />
            <br />
            <p>Don't have an account? Click here to create one:</p>
            <Button color="success" tag={Link} to='/signUp' component={SignUp}>Sign Up</Button>{' '}

        </section>
    );
}

export default WelcomePage;