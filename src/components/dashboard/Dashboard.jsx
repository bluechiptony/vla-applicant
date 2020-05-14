import React from "react";
import "./dashboard.scss"
import {Link} from "react-router-dom"

import Logo from "../../assets/images/logomark.png"
export const Dashboard = () => {
  return (
    <div>
      <NavigationBar/>
      <h1>Dashboard Component</h1>
    </div>
  );
};


export const NavigationBar = () =>{
  return(
    <nav className="navigation-bar">
      <div className="logo">

      <img src={Logo} height={30} alt="" srcset="" />
      </div>
      <ul className = "menu-list">
        <li className="menu-list-item" >
          <Link>
            <span>Home</span>
          </Link>
        </li>
        <li className="menu-list-item">
          <Link>
            <span>Appointments</span>
          </Link>
        </li>
        <li className="menu-list-item">
          <Link>
            <span>Jobs</span>
          </Link>
        </li> 
      </ul>
      <ul className="action-list">
        <li className="menu-list-item">
            <Link>
              <span>Notices</span>
            </Link>
          </li>
        <li className="menu-list-item">
            <Link>
              <span>Profile</span>
            </Link>
          </li>
      </ul>
    </nav>
  )
}