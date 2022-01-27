import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div>
          <NavLink to="/dialogs/1">Dimych</NavLink>
        </div>
        <div>
          <NavLink
            className={(active) => (active.isActive ? s.active : s.dialog)}
            to="/dialogs/2"
          >
            Poroshenko
          </NavLink>
        </div>
        <div>
          <NavLink
            className={(active) => (active.isActive ? s.active : s.dialog)}
            to="/dialogs/3"
          >
            Andrey
          </NavLink>
        </div>
        <div>
          <NavLink
            className={(active) => (active.isActive ? s.active : s.dialog)}
            to="/dialogs/4"
          >
            Sasha
          </NavLink>
        </div>
        <div>
          <NavLink
            className={(active) => (active.isActive ? s.active : s.dialog)}
            to="/dialogs/5"
          >
            Victor
          </NavLink>
        </div>
        <div>
          <NavLink
            className={(active) => (active.isActive ? s.active : s.dialog)}
            to="/dialogs/6"
          >
            Valera
          </NavLink>
        </div>
      </div>

      <div className={s.messages}>
        <div className={s.message}>hi</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>HI YO</div>
      </div>
    </div>
  );
};

export default Dialogs;
