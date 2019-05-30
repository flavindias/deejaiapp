import React from 'react';

import PrivateRoute from "./privateRoutes";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Team from '../pages/Team';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={Header}/>
            <Route exact path={"/about-us"} component={AboutUs}/>
            <Route exact path={"/team"} component={Team}/>
            <Route exact path={"/contact"} component={Contact}/>
            <PrivateRoute exact path={"/app"} component={Dashboard}/>
            <Route exact path={"/login"} component={Login}/>
            <PrivateRoute exact path={"/logout"} component={() => {
                window.sessionStorage.clear("token");
            }}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;