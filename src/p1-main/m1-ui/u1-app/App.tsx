import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from '../../../p2-homeworks/h2/HW2'
import HW3 from '../../../p2-homeworks/h3/HW3'
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import AppNavbar from "./AppNavbar/AppNavbar";

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
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
