import React from "react";
import { updateNewPost } from "./api";
import PostForm from "./PostForm";

const UpdatePost = () => {
  return(
    <div id="updateButton">
        <PostForm />
        <button onClick={updateNewPost}>Update post</button>
    </div>
  );
};

export default UpdatePost;