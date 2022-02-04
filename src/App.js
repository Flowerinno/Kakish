import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Post from "./components/Profile/MyPosts/Post/Post";
import Dialogs from "./components/Dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/*" element={<Profile />} />
          <Route exact path="/dialogs/*" element={<Dialogs />} />
          <Route exact path="/news/*" element={<News />} />
          <Route exact path="/music/*" element={<Music />} />
          <Route exact path="/settings/*" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
