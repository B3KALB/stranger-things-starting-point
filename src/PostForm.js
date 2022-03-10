import React, {useState} from "react";
import { createNewPost } from "./api";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const handlePostButtonClick = () => {
    console.log("Making a post request...");
    const dummyBody = {
      title: title,
      body: body,
      price: price,
      location: location,
    };
    createNewPost(dummyBody);+

    setTitle("");
    setBody("");
    setPrice("");
    setLocation("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }

  return (
    <div>
        <input value={title} onChange={handleTitleChange}/>
        <input value={body} onChange={handleBodyChange}/>
        <input value={price} onChange={handlePriceChange}/>
        <input value={location} onChange={handleLocationChange}/>
        <button onClick={handlePostButtonClick}>
          Make Post Request!
        </button>
    </div>
  );
};
export default PostForm;
