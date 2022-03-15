import React from "react";
import { testAutentication } from "./api";

const LoginPage = () => {
    return(
    <div>
        <button onClick={testAutentication}>Test Authentication</button>
    </div>
    );
};

export default LoginPage;