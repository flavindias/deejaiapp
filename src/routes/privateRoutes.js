import React from 'react';

import { isAuthenticated } from "../services/auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ... rest}) => (
    <Route
        { ...rest}
        render={props => isAuthenticated() ? (
            <Component { ...props} /> )
            : (
                <Redirect to={{pathname: "/login", state: { from: props.location}}}/>
                )
        }
    />
);

export default PrivateRoute;