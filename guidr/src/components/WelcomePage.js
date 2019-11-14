import React, { useState } from "react";

function WelcomePage () {

    const [username, setUserName] = useState([]);
    const [password, setPassword] = useState([]);

    const handleUserName = event => {

        setUserName(username);

    }

    const handlePassword = event => {

        setPassword(password);

    }

    return (
        <section className="login-form">
            <h1>Welcome to Guidr!</h1>
            <form>
               <label>
                   Username:
                <input
                type="text"
                placeholder="UserName"
                username="username"
                onChange={handleUserName}
                />
               </label> 
               <br></br>
               <br></br>
               <label>
                   Password:
                   <input
                   type="text"
                   password="password"
                   placeholder="Password"
                   onChange={handlePassword}
                   />
               </label>
            </form>
        </section>
        
    );
    
}

export default WelcomePage;