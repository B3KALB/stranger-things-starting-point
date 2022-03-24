import React from "react";
import { deletePostById } from "./api";

const DeletePost = (props) => {
  const {id} = props;
  return(
    <div id="deleteButton">
        <button onClick={() => deletePostById(id)}>Delete post</button>
    </div>
  );
};

export default DeletePost;