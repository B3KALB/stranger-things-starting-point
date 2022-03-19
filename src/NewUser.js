import React, {useState} from "react";
import { registerUser } from "./api";

const NewUser = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegisterUserButtonClick = () => {
        console.log("Making a user request...");
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
        <div id="newUserPage">
            <label>Username</label>
            <input type="email" value={username} onChange={handleUsernameChange} placeholder="Please enter email" required/>
            <label>Password</label>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required/>
            <button onClick={() => {
        handleRegisterUserButtonClick();
    }}>
      Register User
    </button>
</div>
    );
};
export default NewUser;