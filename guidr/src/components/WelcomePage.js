import React, { useState } from "react";

function WelcomePage () {

    const [user, setUser] = useState({name: " ", password: " "});

    const handleUserName = event => {
        setUser({...user, username: event.target.value})
    }

    const handlePassword = event => {
        setUser({...user, password: event.target.value})
    }

    const handleSubmit = event => {
        event.PreventDefault();
    }

    return (
        <section >
            <h1>Welcome to Guidr!</h1>
            <br></br>
            <form onChange={event => handleSubmit(event)} className="login-form">
               <label>
                   Username:
                <input
                type="text"
                placeholder="Username"
                onChange={event=> handleUserName(event)}
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
        </section>
        
    );
}

export default WelcomePage;