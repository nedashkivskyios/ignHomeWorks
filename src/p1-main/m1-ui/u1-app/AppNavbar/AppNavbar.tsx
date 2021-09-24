import React from 'react';
import s from "./AppNavbar.module.css";
import {NavLink} from "react-router-dom";

const AppNavbar = () => {
  return (
    <div className={s.navBar}>
      <div><NavLink className={s.navBarItem} activeClassName={s.active} to={'/homeworkone'}>HW1</NavLink></div>
      <div><NavLink className={s.navBarItem} activeClassName={s.active} to={'/homeworktwo'}>HW2</NavLink></div>
      <div><NavLink className={s.navBarItem} activeClassName={s.active} to={'/homeworkthree'}>HW3</NavLink></div>
      <div><NavLink className={s.navBarItem} activeClassName={s.active} to={'/homeworkfour'}>HW4</NavLink></div>
      <div><NavLink className={s.navBarItem} activeClassName={s.active} to={'/homeworkfive'}>HW5</NavLink></div>
      <div><NavLink className={s.navBarItem} activeClassName={s.active} to={'/homeworksix'}>HW6</NavLink></div>
      <div><NavLink className={s.navBarItem} activeClassName={s.active} to={'/homeworkseven'}>HW7</NavLink></div>
      <div><NavLink className={s.navBarItem} activeClassName={s.active} to={'/homeworheight'}>HW8</NavLink></div>
      <div><NavLink className={s.navBarItem} activeClassName={s.active} to={'/homeworknine'}>HW9</NavLink></div>
      <div><NavLink className={s.navBarItem} activeClassName={s.active} to={'/homeworkten'}>HW10</NavLink></div>
      <div><NavLink className={s.navBarItem} activeClassName={s.active} to={'/homeworkeleven'}>HW11</NavLink></div>
      <div><NavLink className={s.navBarItem} activeClassName={s.active} to={'/homeworktwelve'}>HW12</NavLink></div>
    </div>
  );
};

export default AppNavbar;