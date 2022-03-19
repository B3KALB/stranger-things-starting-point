import React from "react";
import { updateNewPost } from "./api";

const UpdatePost = () => {
  return(
    <div id="updateButton">
        <button onClick={updateNewPost}>Update post</button>
    </div>
  );
};

export default UpdatePost;