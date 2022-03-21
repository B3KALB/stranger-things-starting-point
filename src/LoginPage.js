import React, {useState} from "react";
import { testAutentication } from "./api";

const LoginPage = (props) => {
    const setIsLoggedIn  = props.isLoggedIn;
    const isValidJWT = props.isValidJWT;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const loginButton = async () => {
        setUsername("");
        setPassword("");
        setIsLoggedIn(true);
        await testAutentication();
        await isValidJWT();
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
        <button onClick={() => {
            loginButton();
            }}>Log in</button>
    </div>
    
    )};

export default LoginPage;