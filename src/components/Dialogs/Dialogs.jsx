import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialogsItems}>
      <div>
        <NavLink to={"" + props.id}>{props.name}</NavLink>
      </div>
    </div>
  );
};

const Dialogs = (props) => {
  return (
    <div>
      <div className={s.dialogs}>
        <DialogItem name='Dimych' id='1' />

        <div>
          <NavLink className={(active) => (active.isActive ? s.active : s.dialog)} to='2'>
            Poroshenko{" "}
          </NavLink>
        </div>

        <div>
          <NavLink className={(active) => (active.isActive ? s.active : s.dialog)} to='3'>
            Andrey
          </NavLink>
        </div>
        <div>
          <NavLink className={(active) => (active.isActive ? s.active : s.dialog)} to='4'>
            Sasha
          </NavLink>
        </div>
        <div>
          <NavLink className={(active) => (active.isActive ? s.active : s.dialog)} to='5'>
            Victor
          </NavLink>
        </div>
        <div>
          <NavLink className={(active) => (active.isActive ? s.active : s.dialog)} to='6'>
            Valera
          </NavLink>
        </div>

        <div className={s.messages}>
          <div className={s.message}>hi</div>
          <div className={s.message}>How are you?</div>
          <div className={s.message}>HI YO</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
