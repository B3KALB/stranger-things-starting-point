import React from "react";
import { registerUser } from "./api";

export const NewUser = () => {
    return (
        <div>
            <button onClick={() => {
                const dummyCreds = {
                    user: {
                userName: "B3KALB",
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