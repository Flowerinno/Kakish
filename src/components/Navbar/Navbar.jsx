import React from "react";
import classes from "./Navbar.module.css";

// let classes = {
//   'nav': 'Navbar_nav__tQTpC',
//    'item': 'Navbar_item__RDo8d',
//     'active': ''
// }

let classesNew = `${classes.item} ${classes.active}`;

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <a href='/Profile'> Profile </a>
      </div>
      <div className={classesNew}>
        <a href='/Messages'> Messages </a>
      </div>
      <div className={classes.item}>
        <a href='/News'> News </a>
      </div>
      <div className={classes.item}>
        <a href='/Music'> Music </a>
      </div>
      <div className={classes.item}>
        <a href='/Settings'> Settings </a>
      </div>
    </nav>
  );
};

export default Navbar;
