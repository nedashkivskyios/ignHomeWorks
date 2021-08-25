import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from '../../../p2-homeworks/h2/HW2'
import HW3 from '../../../p2-homeworks/h3/HW3'
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import AppNavbar from "./AppNavbar/AppNavbar";
import HW4 from '../../../p2-homeworks/h4/HW4'
import HW5 from "../../../p2-homeworks/h5/HW5";

function App() {
  return (
    <BrowserRouter>
      <div className={s.App}>
        <div className={s.appTitle}>JUST REACT(TS) HOMEWORKS</div>
        <div className={s.appNavbar}>
          <AppNavbar/>
        </div>
        <div className={s.appContent}>
          <Route path={'/homeworkone'} render={() => <HW1/>}/>
          <Route path={'/homeworktwo'} render={() => <HW2/>}/>
          <Route path={'/homeworkthree'} render={() => <HW3/>}/>
          <Route path={'/homeworkfour'} render={() => <HW4/>}/>
          <Route path={'/homeworkfive'} render={() => <HW5/>}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
