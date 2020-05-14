import React from "react";
import "./dashboard.scss";
import { BrowserRouter as DashboardRouter, Switch, Route, Link } from "react-router-dom";

import Logo from "../../assets/images/logomark.png";
import { Overview } from "../Overview/Overview";
import { Appointments } from "../Appointments/Appointments";
import { Jobs } from "../Jobs/Jobs";
export const Dashboard = () => {
  return (
    <div>
      <DashboardRouter>
        <NavigationBar />
        <div className="router-holder">
          <Switch>
            <Route path="/home/" exact component={Overview} />
            <Route path="/home/appointments" component={Appointments} />
            <Route path="/home/jobs" component={Jobs} />
          </Switch>
        </div>
      </DashboardRouter>
    </div>
  );
};

export const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="logo">
        <img src={Logo} height={30} alt="VLA logo" />
      </div>
      <ul className="menu-list">
        <li className="menu-list-item">
          <Link to="/home">
            <span>Home</span>
          </Link>
        </li>
        <li className="menu-list-item">
          <Link to="/home/appointments">
            <span>Appointments</span>
          </Link>
        </li>
        <li className="menu-list-item">
          <Link to="/home/jobs">
            <span>Jobs</span>
          </Link>
        </li>
      </ul>
      <ul className="action-list">
        <li className="menu-list-item">
          <Link to="/home/notification">
            <span>Notices</span>
          </Link>
        </li>
        <li className="menu-list-item">
          <Link to="/home/profile">
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
