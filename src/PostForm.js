import React, {useState} from "react";
import { createNewPost } from "./api";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const handlePostButtonClick = () => {
   //console.log("Making a post request...");
    const postBody = {
      title: title,
      description: body,
      price: price,
      location: location,
      willDeliver: willDeliver,
    };
    createNewPost(postBody);

    setTitle("");
    setBody("");
    setPrice("");
    setLocation("");
    setWillDeliver("")
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

  const handleDeliverChange = (event) => {
    setWillDeliver(event.target.value);
  }

  return (
    <div id="postFormContainer">
        <label>Title</label>
        <input value={title} onChange={handleTitleChange} placeholder="What is it?" required/>
        <label>Description</label>
        <input value={body} onChange={handleBodyChange} placeholder="Tell us about it." required/>
        <label>Price</label>
        <input type="number" value={price} onChange={handlePriceChange} placeholder="How much?" required/>
        <label>Location</label>
        <input value={location} onChange={handleLocationChange} placeholder="City, ST" required/>
        <label>Will deliver?</label>
        <input type="checkbox" value={willDeliver} onChange={handleDeliverChange}/>
        <button onClick={handlePostButtonClick}>
          Make Post Request!
        </button>
    </div>
  );
};
export default PostForm;
