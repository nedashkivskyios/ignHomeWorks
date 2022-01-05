import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import HW1 from "../../../p2-homeworks/h1/HW1";
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW4 from "../../../p2-homeworks/h4/HW4";
import HW6 from "../../../p2-homeworks/h6/HW6";
import HW7 from "../../../p2-homeworks/h7/HW7";
import HW8 from "../../../p2-homeworks/h8/HW8";
import HW9 from "../../../p2-homeworks/h9/HW9";
import HW10 from "../../../p2-homeworks/h10/HW10";
import HW11 from "../../../p2-homeworks/h11/HW11";
import HW12 from "../../../p2-homeworks/h12/HW12";
import {HW13} from "../../../p2-homeworks/h13/HW13";

export const PATH = {
  PRE_JUNIOR: '/pre-junior',
  HW1: '/homeworkone',
  HW2: '/homeworktwo',
  HW3: '/homeworkthree',
  HW4: '/homeworkfour',
  HW6: '/homeworksix',
  HW7: '/homeworkseven',
  HW8: '/homeworheight',
  HW9: '/homeworknine',
  HW10: '/homeworkten',
  HW11: '/homeworkeleven',
  HW12: '/homeworktwelve',
  HW13: '/homeworkthirteen',
}

function Routes() {
  return (
    <div>
      <Switch>
        <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

        <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
        <Route path={PATH.HW1} render={() => <HW1/>}/>
        <Route path={PATH.HW2} render={() => <HW2/>}/>
        <Route path={PATH.HW3} render={() => <HW3/>}/>
        <Route path={PATH.HW4} render={() => <HW4/>}/>
        <Route path={PATH.HW6} render={() => <HW6/>}/>
        <Route path={PATH.HW7} render={() => <HW7/>}/>
        <Route path={PATH.HW8} render={() => <HW8/>}/>
        <Route path={PATH.HW9} render={() => <HW9/>}/>
        <Route path={PATH.HW10} render={() => <HW10/>}/>
        <Route path={PATH.HW11} render={() => <HW11/>}/>
        <Route path={PATH.HW12} render={() => <HW12/>}/>
        <Route path={PATH.HW13} render={() => <HW13/>}/>

        <Route render={() => <Error404/>}/>
      </Switch>
    </div>
  )
}

export default Routes
