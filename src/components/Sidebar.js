import React, { Component } from 'react';
import {
    NavLink
  } from "react-router-dom";
class Sidebar extends Component {
    render() {
        return (
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Start Bootstrap </div>
                <div className="list-group list-group-flush">
                    <NavLink to="/Dashboard" activeClassName="active">Dashboard</NavLink>
                    <NavLink to="/Shortcuts" activeClassName="active">Shortcuts</NavLink>
                    <NavLink to="/Overview" activeClassName="active">Overview</NavLink>
                    <NavLink to="/Events" activeClassName="active">Events</NavLink>
                    <NavLink to="/Profile" activeClassName="active">Profile</NavLink>
                </div>
            </div>

        );
    }
}

export default Sidebar;