import React from "react";
import { registerUser } from "./api";

const NewUser = () => {
    return (
        <div>
            <button onClick={() => {
                const dummyCreds = {
                    user: {
                username: "B3KALB1",
                password: "2112isMyClass"
                }
            }
        registerUser(dummyCreds);
    }}>
      Register User
    </button>
</div>
    );
};

export default NewUser;