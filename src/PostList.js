import React, { useState, useEffect } from 'react';
import { getPosts } from './api';
import DeletePost from "./DeletePost";
import UpdatePost from "./UpdatePost";
//useEffect example
const PostList = () => {
    const [posts, setPosts] = useState([]);
 

    useEffect(async () => {
        const posts = await getPosts();
        setPosts(posts.data.posts);
    }, []);


    return (
        <div id="postListContainer">
            {posts.map(post =>
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>{"$" + post.price}</p>
                    <p>{post.location}</p>
                    <p>{post.willDeliver ? "will deliver" : "will not deliver" }</p>
                       {post.isAuthor ?
                        <div id="buttonContainer">
                            <UpdatePost />
                            <DeletePost />
                        </div> :
                        null
                        }
                </div>
            )}
        </div>
    );
};
//useEffect example
export default PostList;