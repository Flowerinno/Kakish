import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

// let s = {
//   'nav': 'Navbar_nav__tQTpC',
//    'item': 'Navbar_item__RDo8d',
//     'active': ''
// }



const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink className={data=>data.isActive ? 
          s.active : s.item} to='/Profile' > Profile </NavLink>
      </div>
      <div>
        <NavLink to='/Dialogs' className={data=>data.isActive ? 
          s.active : s.item}> Messages </NavLink>
      </div>
      <div>
        <NavLink to='/News' className={data=>data.isActive ? 
          s.active : s.item}> News </NavLink>
      </div>
      <div>
        <NavLink to='/Music' className={data=>data.isActive ? 
          s.active : s.item}> Music </NavLink>
      </div>
      <div>
        <NavLink to='/Settings' className={data=>data.isActive ? 
          s.active : s.item}> Settings </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
