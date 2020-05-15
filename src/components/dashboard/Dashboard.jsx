import React from "react";
import "./dashboard.scss";
import { BrowserRouter as DashboardRouter, Switch, Route, NavLink } from "react-router-dom";

import Logo from "../../assets/images/logomark.png";
import { Overview } from "../Overview/Overview";
import { Appointments } from "../Appointments/Appointments";
import { Jobs, Job } from "../Jobs/Jobs";
import { Applications } from "../Applications/Applications";

export const Dashboard = () => {
  return (
    <div>
      <DashboardRouter>
        <NavigationBar />
        <div className="router-holder">
          <Switch>
            <Route path="/home/" exact={true} component={Overview} />
            <Route path="/home/appointments" component={Appointments} />
            <Route path="/home/jobs" exact component={Jobs} />
            <Route path="/home/jobs/:code" component={Job} />
            <Route path="/home/applications" component={Applications} />
          </Switch>
        </div>
      </DashboardRouter>
    </div>
  );
};

export const NavigationBar = () => {
  // const activeStyle = {
  //   color: "#ffab13",
  // };
  return (
    <nav className="navigation-bar">
      <div className="logo">
        <img src={Logo} height={30} alt="VLA logo" />
      </div>
      <ul className="menu-list">
        <li className="menu-list-item">
          <NavLink to="/home" exact activestyle={{ color: "#ffab13" }}>
            <span>Home</span>
          </NavLink>
        </li>
        <li className="menu-list-item">
          <NavLink to="/home/appointments" activestyle={{ color: "#ffab13" }}>
            <span>Appointments</span>
          </NavLink>
        </li>
        <li className="menu-list-item" activestyle={{ color: "#ffab13" }}>
          <NavLink to="/home/jobs">
            <span>Jobs</span>
          </NavLink>
        </li>
        <li className="menu-list-item" activestyle={{ color: "#ffab13" }}>
          <NavLink to="/home/applications">
            <span>Applications</span>
          </NavLink>
        </li>
      </ul>
      <ul className="action-list">
        <li className="menu-list-item">
          <NavLink to="/home/notifications" activestyle={{ color: "#ffab13" }}>
            <span>Notices</span>
          </NavLink>
        </li>
        <li className="menu-list-item">
          <NavLink to="/home/profile">
            <span>Profile</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
