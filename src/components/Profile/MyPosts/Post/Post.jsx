import React from "react";
import classes from  "./Post.module.css";



// let classes = {
//   'profile': 'Profile_profile__4YSQP',
//   'item': 'Profile_item__3NWq5',
//   'avatar': 'Profile_avatar__sb+e6'
// }

const Post = (props) => {
  return (
    <div>
    <div className={classes.item}>
      <img src='https://cdn.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg'/>
      {props.message}
      <li>
      <button>Delete</button>
      <button>Correct</button>
      </li>
    </div> 
  </div>
  );
}

export default Post;
