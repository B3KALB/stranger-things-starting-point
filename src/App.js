
import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import LoginPage from "./LoginPage";
import NewUser from "./NewUser";
import PostForm from "./PostForm";
import LogOutButton from "./LogOutButton"
import { useEffect, useState } from "react/cjs/react.production.min";
import { testAutentication } from "./api";


const App = (props) => {
  const { username } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const isValidJWT = async () => {
  const token = localStorage.getItem("stranger-things-JWT");
  if (!token) return false;
  const isValid = await testAutentication();
  setIsLoggedIn(isValid)
}

useEffect(() => {
  setIsLoggedIn(!!localStorage.getItem("stranger-things-JWT"))
}, [])
  console.log("is lopgged in", isLoggedIn);

  return (
    <>
      <h1>Welcome, {username}</h1>

      <LoginPage setIsLoggedIn={setIsLoggedIn} isValidJWT={isValidJWT}/>
      <NewUser />
      <button onClick={testAutentication}>Test Authentication</button>
      {isLoggedIn && <PostForm />}
      {isLoggedIn ? <PostList /> : <p>Please Log In..</p>} 
      <LogOutButton setIsLoggedIn={setIsLoggedIn}/>
    </>
  );
}

export default hot(App);
