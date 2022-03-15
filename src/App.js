
import React from "react";
import { hot } from 'react-hot-loader/root';
import { PostList } from "./PostList";
import { LoginPage } from "./LoginPage";
import { NewUser } from "./NewUser";
import { PostForm } from "./PostForm";
import { DeletePost } from "./DeletePost";


const App = (props) => {
  const { name } = props;


  return (
    <>
    <div>
      <h1>Hot reload is working?</h1>
    </div>
      <h1>Welcome, {name}</h1>

      <PostList />
      <LoginPage />
      <NewUser />
      <PostForm />
      <DeletePost />
    </>
  );
}

export default hot(App);
