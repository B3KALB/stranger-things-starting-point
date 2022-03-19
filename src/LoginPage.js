import React, {useState} from "react";
import { testAutentication } from "./api";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const loginButton = () => {
        setUsername("");
        setPassword("");
        testAutentication()
    }
    const handleUsername = (event) => {
            setUsername(event.target.value);
          }
    const handlePassword = (event) => {
            setPassword(event.target.value);
          }

    return(
    <div id="loginPage">
        <label>Username</label>
            <input type="email" value={username} onChange={handleUsername} placeholder="Please enter email" required/>
            <label>Password</label>
            <input type="password" value={password} onChange={handlePassword} placeholder="Password" required/>
        <button onClick={loginButton}>Log in</button>
    </div>
    
    )};

export default LoginPage;