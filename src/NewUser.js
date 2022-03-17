import React, {useState} from "react";
import { registerUser } from "./api";


const NewUser = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegisterUserButtonClick = () => {
        console.log("Making a post request...");
      
        registerUser(username, password);

        setUsername("");
        setPassword("");
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      }
    return (
        <div>
            <label>Username</label>
            <input value={username} onChange={handleUsernameChange} placeholder="Username"/>
            <label>Password</label>
            <input value={password} onChange={handlePasswordChange} placeholder="Password"/>
            <button onClick={() => {
        handleRegisterUserButtonClick();
    }}>
      Register User
    </button>
</div>
    );
};


export default NewUser;