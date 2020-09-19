import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Musics from "../pages/Musics";
import Signup from "../pages/Signup";

const Router = (props) => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {"/"}>
          <Login />
        </Route>
        <Route exact path = {"/login"}>
          <Login />
        </Route>
        <Route exact path = {"/signup"}>
          <Signup />
        </Route> 
        <Route exact path = {"/musics"}>
          <Musics />
        </Route>
        <Route exact path = {"/music/:id"}>
          <p>Music</p>
        </Route>
      </Switch>
    </BrowserRouter>
  )

}

export default Router;
