import React from "react";
import classes from  "./MyPosts.module.css";
import Post from "./Post/Post";




const MyPosts = () => {
  return (
    <div>
      <h1 style={{textIndent: '10%'}}>My posts</h1>
    <div>
       <textarea></textarea>
      <button>Add post</button>
      
    </div>
        <div className={classes.posts}>
        <Post message='Hello zelenskiy'/>
      </div>
    </div>
    );
};

export default MyPosts;
