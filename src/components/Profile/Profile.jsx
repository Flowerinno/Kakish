import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from  "./Profile.module.css";




const Profile = () => {
  return (
        <div>
          <h1>Володимир Зеленський</h1>
      <div className={classes.avatar}>
        <img src="https://icdn.lenta.ru/images/2022/01/17/11/20220117115556991/square_320_d0e700224277473dd037f348c3df181d.jpg"></img>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
