import React from 'react';

const LogOutButton = (props) => {
    const {setIsLoggedIn} = props;
  return(
    <div id="logOutButton">
        <button onClick={() => {
            localStorage.removeItem("stranger_things_JWT");
            setIsLoggedIn(false);
        }}>Log Out</button>
    </div>
  );
};

export default LogOutButton;