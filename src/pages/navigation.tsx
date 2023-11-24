import React from "react";
import { useState } from "react"
import { NavLink, useLocation, } from "react-router-dom";
import logo from "../img/DMA-dark.png";
import Dropdown from "react-dropdown"
import { NavDropdown } from "react-bootstrap"



function Navigation() {
  return (
    <div className="nav">
      <header>
        <nav className="px-10 py-5">
          <ul className="navbar">
            <li className="navLi">
              <a className="logolink" href="/">
                <img src={logo} className="logo" />
              </a>
            </li>
            <li className="navLi"><NavLink to="/" className={({ isActive }) =>
              isActive ? "nav-link current" : "nav-link"
            }>
              Home
              <span className="sr-only">(current)</span>
            </NavLink></li>
            <li className="navLi"><NavLink to="/monsters" className={({ isActive }) =>
              isActive ? "nav-link current" : "nav-link"
            }>
              Monsters
            </NavLink></li>
            <li className="navLi">
              <div className="dropdown">
                <button className="dropbtn">My Stuff &#x25bc;
                </button>
                <div className="dropdown-content">
                  <NavLink to="/stuff/players">My Players</NavLink>
                  <NavLink to="/stuff/encounters">My Encounters</NavLink>
                  <NavLink to="/tracker">Combat Tracker</NavLink>
                </div>
              </div>
            </li>
            <li className="navLi"><NavLink to="/about" className={({ isActive }) =>
              isActive ? "nav-link current" : "nav-link"
            }>
              About
            </NavLink></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
