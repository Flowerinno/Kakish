import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Post from "./components/Profile/MyPosts/Post/Post";
import Dialogs from "./components/Dialogs/Dialogs";
import { Routes ,Route } from "react-router-dom";


const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
        <Routes>
       <Route exact path="/dialogs" element={<Dialogs/>}/>
       <Route exact path='/profile/' element={<Profile />}/>
       </Routes>
       
      </div>
     </div>
  );
};

export default App;