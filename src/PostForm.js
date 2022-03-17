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
    const dummyBody = {
      title: title,
      description: body,
      price: price,
      location: location,
      willDeliver: true
    };
    createNewPost(dummyBody);

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
      setWillDeliver(event.target.value)
  }

  return (
    <div id="postFormId">
        <label>Title</label>
        <input value={title} onChange={handleTitleChange} placeholder="What is it?"/>
        <label>Description</label>
        <input value={body} onChange={handleBodyChange} placeholder="Tell us about it."/>
        <label>Price</label>
        <input value={price} onChange={handlePriceChange} placeholder="How much is it?"/>
        <label>Location</label>
        <input value={location} onChange={handleLocationChange} placeholder="City, ST"/>
        <label>Will deliver?</label>
        <input value={willDeliver} onChange={handleDeliverChange} placeholder="ture or false"/>
        <button onClick={handlePostButtonClick}>
          Make Post Request!
        </button>
    </div>
  );
};
export default PostForm;
