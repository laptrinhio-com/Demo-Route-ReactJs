import React, { Component } from 'react';
import {
    Route
  } from "react-router-dom";
import Dashboard from './Dashboard';
import Events from './Events';
import Overview from './Overview';
import Profile from './Profile';
import Shortcuts from './Shortcuts';

class DieuHuong extends Component {
    render() {
        return (
            <div>
                <Route exact path="/(Dashboard|)">
                    <Dashboard />
                </Route>
                <Route exact path="/Events">
                    <Events />
                </Route>
                <Route exact path="/Overview">
                    <Overview />
                </Route>
                <Route exact path="/Profile">
                    <Profile />
                </Route>
                <Route exact path="/Shortcuts">
                    <Shortcuts />
                </Route>
            </div>
        );
    }
}

export default DieuHuong;