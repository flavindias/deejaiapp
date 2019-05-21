import React from 'react';

import PrivateRoute from "./privateRoutes";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from '../pages/Home/Home';
import AboutUs from '../pages/AboutUs/AboutUs';
import Team from '../pages/Team/Team';
import Contact from '../pages/Contact/Contact';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={Header}/>
            <Route exact path={"/about-us"} component={AboutUs}/>
            <Route exact path={"/team"} component={Team}/>
            <Route exact path={"/contact"} component={Contact}/>
            <PrivateRoute exact path={"/app"} component={() => <h1>Dashboard</h1>}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;