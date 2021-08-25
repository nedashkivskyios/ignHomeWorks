import React from 'react'
import s from './App.module.css'
import {HashRouter} from "react-router-dom";
import AppNavbar from "./AppNavbar/AppNavbar";
import Routes from "./Routes";

function App() {
  return (
    <HashRouter>
      <div className={s.App}>
        <div className={s.appTitle}>JUST REACT(TS) HOMEWORKS</div>
        <div className={s.appNavbar}>
          <AppNavbar/>
        </div>
        <div className={s.appContent}>
          <Routes/>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
