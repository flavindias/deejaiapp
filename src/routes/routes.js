import React from 'react';

import PrivateRoute from "./privateRoutes";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Team from '../pages/Team';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login'
import Invite from '../pages/Invite';
import RoomView from '../pages/RoomView';
import PlaylistView from '../pages/PlaylistView';
import DeejaiView from '../pages/DeejaiView';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={"/"} component={Header} />
      <Route exact path={"/about-us"} component={AboutUs} />
      <Route exact path={"/team"} component={Team} />
      <Route exact path={"/contact"} component={Contact} />
      <PrivateRoute exact path={"/app"} component={Dashboard} />
      <PrivateRoute exact path={"/app/rooms/:id"} component={RoomView} />
      <PrivateRoute exact path={"/app/playlists/:id"} component={PlaylistView} />
      <PrivateRoute exact path={"/app/playlists/:id/deejai"} component={DeejaiView} />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/join/:code"} component={Invite} />
      <PrivateRoute exact path={"/logout"} component={() => {
        window.sessionStorage.clear("@DeejAI:token");

      }} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
