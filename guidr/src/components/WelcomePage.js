import React, { useState } from "react";
import {Button } from 'reactstrap';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function WelcomePage() {

    const [user, setUser] = useState({ name: " ", password: " " });

    const handleUserName = event => {
        setUser({ ...user, username: event.target.value })
    }

    const handlePassword = event => {
        setUser({ ...user, password: event.target.value })
    }

    const handleSubmit = event => {
        event.PreventDefault();
    }

    return (
        <section >
            <NavBar />
            <img className="img-align" src="./images/logo.png" alt="Guidr Logo"></img>
            <br />
            <h1>Welcome to Guidr!</h1>
            <br />
            <form onChange={event => handleSubmit(event)} className="login-form">
                <label>
                    Username:
                <input
                        type="text"
                        placeholder="Username"
                        onChange={event => handleUserName(event)}
                    />
                </label>
                <br />
                <br />
                <label>
                    Password:
                   <input
                        type="text"
                        placeholder="Password"
                        onChange={event => handlePassword(event)}
                    />
                </label>
            </form>
            <br />
            <Button color="success" tag={ Link } to='/'>Submit</Button>{' '}
            <br />
            <p>Don't have an account? Click here to create one:</p>
            <Button color="success" tag={ Link } to='/'>Sign Up</Button>{' '}
        </section>
    );
}

export default WelcomePage;