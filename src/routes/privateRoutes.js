import React from 'react';

import AuthService from "../services/auth";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => new AuthService().isAuthenticated() ? (
      <Component {...props} />)
      : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

export default PrivateRoute;
