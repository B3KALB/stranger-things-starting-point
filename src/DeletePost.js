import React from "react";
import { deletePostById } from "./api";

const DeletePost = () => {
  return(
    <div id="deleteButton">
        <button onClick={deletePostById}>Delete post</button>
    </div>
  );
};

export default DeletePost;