import React, { useState } from "react";

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
            <img className="img-align" src="./images/logo.png" alt="Guidr Logo"></img>
            <br></br>
            <h1>Welcome to Guidr!</h1>
            <br></br>
            <form onChange={event => handleSubmit(event)} className="login-form">
                <label>
                    Username:
                <input
                        type="text"
                        placeholder="Username"
                        onChange={event => handleUserName(event)}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Password:
                   <input
                        type="text"
                        placeholder="Password"
                        onChange={event => handlePassword(event)}
                    />
                </label>
            </form>
            <br></br>
            <button className="buttonStyler">Submit</button>
            <br></br>
            <p>Don't have an account? Click here to create one:</p>
        </section>
    );
}

export default WelcomePage;